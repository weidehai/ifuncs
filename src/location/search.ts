interface search {
  searchObj: null | ssObject;
  get(key: string): string;
  contain(key: string): boolean;
  parse(searchStr?: string): ssObject;
}

interface ssObject {
  [prop: string]: string;
}
interface myEvent extends Event {
  arguments: IArguments;
}
export const search: search = (function () {
  let isBrowser = (typeof window)==='undefined'?false:true;
  let search: search = {
    searchObj: null,
    get(key) {
      return this.searchObj[key];
    },
    contain(key) {
      return !!this.searchObj[key];
    },
    parse(searchStr) {
      let _search =
        searchStr || (isBrowser && window.location.search.substring(1));
      if (!_search) return;
      let items = _search.split("&");
      let result: Record<string, string> = {};
      items.forEach((item) => {
        let [key, value] = item.split("=");
        if (key && value) result[key] = value;
      });
      return (this.searchObj = result);
    },
  };
  search.searchObj = search.parse();
  function proxy(prop: keyof History) {
    const origin = history[prop];
    return function () {
      const e = new Event(prop);
      (<myEvent>e).arguments = arguments;
      const rv = origin.apply(this, arguments);
      window.dispatchEvent(e);
      return rv;
    };
  }
  if (isBrowser) {
    window.addEventListener("popstate", () => {
      search.parse();
    });
    history.pushState = proxy("pushState");
    history.replaceState = proxy("replaceState");
    window.addEventListener("pushState", function (e: myEvent) {
      search.parse();
    });
    window.addEventListener("replaceState", function (e: myEvent) {
      search.parse();
    });
  }
  return search;
})();

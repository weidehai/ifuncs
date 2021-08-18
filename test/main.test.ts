import * as ifuncs from "../src/main";

test("arrayinsertBefore", () => {
  expect(ifuncs.arrayInsertBefore(2, "w", [1, 2, 3, 4])).toStrictEqual([
    1,
    2,
    "w",
    3,
    4,
  ]);
});

test("mergeOption", () => {
  expect(
    ifuncs.mergeOption(
      { name: "123", age: "456" },
      { name: undefined, age: "789" }
    )
  ).toEqual({ name: "12", age: "456" });
});
test("mergeOption", () => {
  expect(
    ifuncs.mergeOption(
      { name: "123", age: undefined },
      { name: undefined, age: "789" }
    )
  ).toStrictEqual({ name: "123", age: undefined });
});
test("mergeOption", () => {
  expect(
    ifuncs.mergeOption(
      { name: "123", age: undefined },
      { name: undefined, age: null }
    )
  ).toStrictEqual({ name: "123", age: undefined });
});

test("isNull", () => {
  let expected: boolean = true;
  expect(ifuncs.isNull(null)).toBe(expected);
});
test("isUndefined", () => {
  expect(ifuncs.isUndefined(undefined)).toBe(true);
});
test("isFunction", () => {
  expect(ifuncs.isFunction(function () {})).toBe(true);
});
test("isArray", () => {
  expect(ifuncs.isArray([])).toBe(true);
});
test("isArray", () => {
  expect(ifuncs.isArray("")).toBe(false);
});
test("isStrign", () => {
  expect(ifuncs.isString("123")).toBe(true);
});

//1 弧度=57.29578 度
test("arcTodeg", () => {
  expect(Math.floor(ifuncs.arcTodeg(3))).toBe(57 * 3);
});

//1 度=0.017453293 弧度
test("degToarc", () => {
  expect(ifuncs.degToarc(1).toFixed(9)).toBe("0.017453293");
});

test("reliableFloatAdd", () => {
  expect(ifuncs.reliableFloatAdd(1, 1)).toBe(2);
});
test("reliableFloatAdd", () => {
  expect(ifuncs.reliableFloatAdd(1.1, 1.1)).toBe(2.2);
});
test("reliableFloatAdd", () => {
  expect(ifuncs.reliableFloatAdd(0.1, 0.2)).toBe(0.3);
});
test("reliableFloatAdd", () => {
  expect(ifuncs.reliableFloatAdd(-0.1, -0.2)).toBe(-0.3);
});

test("deep copy", () => {
  let origin = [1, 2, 3];
  let target = ifuncs.dc(origin);
  let result = target === origin;
  expect(result).toBe(false);
});

test("deep copy", () => {
  let origin = [1, 2, 3];
  let target = ifuncs.dc(origin);
  expect(target).toEqual([1, 2, 3]);
});

test("deep copy", () => {
  let origin = [
    { name: "weidehai" },
    { name: "weidehai2" },
    { name: "weidehai3" },
  ];
  let target = ifuncs.dc(origin);
  let result = target === origin;
  expect(result).toBe(false);
});

test("deep copy", () => {
  let origin = [
    { name: "weidehai" },
    { name: "weidehai2" },
    { name: "weidehai3" },
  ];
  let target = ifuncs.dc(origin);
  origin[1].name = "wedehai";
  expect(target).toEqual([
    { name: "weidehai" },
    { name: "weidehai2" },
    { name: "weidehai3" },
  ]);
});

test("deep copy", () => {
  let origin: Record<string | number | symbol, any> = {};
  origin.fullname = {};
  origin.name = { name: origin.fullname };
  origin.fullname.name = origin.name.name;
  let target = ifuncs.dc(origin);
  let result = target === origin;
  expect(result).toBe(false);
});

test("deep copy", () => {
  let origin: Record<string | number | symbol, any> = {};
  origin.fullname = {};
  origin.name = { name: origin.fullname };
  origin.fullname.name = origin.name;
  let target = ifuncs.dc(origin);
  expect(
    (<Record<string | number | symbol, any>>target).fullname.name.name ===
      (<Record<string | number | symbol, any>>origin).name.name
  ).toBe(true);
});

test("trimAllWhiteSpace", () => {
  expect(ifuncs.trimAllWhiteSpace("   123  ")).toBe("123");
});


test("location search", () => {
  let searchStr = `ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=大撒大撒&oq=%252C%25E5%259B%25A0%25E4%25B8%25BA%25E7%25B1%25BB%25E5%259E%258B%25E4%25B8%25BA%2520%2526quot%253Bstring%2526quot%253B%2520%25E7%259A%2584%25E8%25A1%25A8%25E8%25BE%25BE%25E5%25BC%258F%25E4%25B8%258D%25E8%2583%25BD%25E7%2594%25A8%25E4%25BA%258E%25E7%25B4%25A2%25E5%25BC%2595%25E7%25B1%25BB%25E5%259E%258B%2520%2526quot%253BObject%2526quot%253B%25E3%2580%2582%2520%25E5%259C%25A8%25E7%25B1%25BB%25E5%259E%258B%2520%2526quot%253BObject%2526quot%253B%2520%25E4%25B8%258A&rsv_pq=d507cdc9000551d7&rsv_t=fa7dSqsYSvOE3HeapBy892xCBH%2FCAEgRy4aPTt46NwNG7U0qSpmAWzaP%2B5c&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=2267&rsv_sug3=171&rsv_sug1=19&rsv_sug7=001&rsv_sug2=0&rsv_sug4=3669&rsv_sug=9`
  let result = ifuncs.search.parse(searchStr)
  expect(result).toBeInstanceOf(Object);
  expect(result).toHaveProperty('ie');
  expect(result).not.toHaveProperty('tn',"baidu2");
  expect(result).toHaveProperty('wd',"大撒大撒");
});

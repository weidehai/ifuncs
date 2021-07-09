export function appendHTML(ele:HTMLElement, html:string):void{
  let divTemp = document.createElement("div");
  let frag = document.createDocumentFragment();
  let nodes = null;
  divTemp.innerHTML = html;
  nodes = divTemp.childNodes;
  nodes.forEach((node) => {
    frag.appendChild(node.cloneNode(true));
  });
  ele.appendChild(frag);
}

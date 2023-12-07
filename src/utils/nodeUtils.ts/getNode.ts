import { PageJson, PageJsonComponent } from "../../interface/pageJson";

const findNodeByComId = (id: string,nodeList?: PageJson | undefined): PageJsonComponent | any => {
  if(!nodeList) {
    return null
  }
  let node;
  const dfs = (id: string,nodeList: PageJson | undefined) => {
    for(let propName in nodeList){
      if(propName === id){
        node = nodeList[propName];
      }else if(nodeList[propName].childList){
        dfs(id, nodeList[propName].childList)
      }
    }
  }
  dfs(id,nodeList)
  return node;
}

export {
  findNodeByComId
}

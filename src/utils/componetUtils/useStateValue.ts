import { useState } from "react";

const useStateValue = (valueList: any, comId: string) => {
  const [state, setState] = useState<any>({...valueList})
  const xinCtx = window.xinCtx;
  if(!xinCtx[comId]) {
    xinCtx[comId] = {}
  }
  xinCtx[comId].getValue = (key: string) => {
    return state[key];
  }
  xinCtx[comId].setValue = (key: string,value: any) => {
    state[key] = value;
    setState({...state})
  }
  return state
}

export default useStateValue
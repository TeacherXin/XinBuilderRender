import React from 'react'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { divJson } from '../../interface/divJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinDiv(props: divJson) {
  const { styleCss,visible,actionJs, src, comId } = props;
  const style = useEffectStyle(styleCss)
  const state = useStateValue({visible, src}, comId)

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display:state.visible?'none' : 'block'}}>
      <div onClick={onClick} style={{...style, backgroundImage: `url(${state.src})`, backgroundSize:'cover'}}>
      </div>
    </div>
  )
}

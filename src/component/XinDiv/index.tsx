import React from 'react'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { divJson } from '../../interface/divJson';

export default function XinDiv(props: divJson) {
  const { styleCss,visible,actionJs, src } = props;
  const style = useEffectStyle(styleCss)

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display:visible?'none' : 'block'}}>
      <div onClick={onClick} style={{...style, backgroundImage: `url(${src})`, backgroundSize:'cover'}}>
      </div>
    </div>
  )
}

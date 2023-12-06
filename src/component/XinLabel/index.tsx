import React from 'react'
import './index.css'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { labelJson } from '../../interface/labelJson'

export default function XinLabel(props: labelJson) {
  const {attributeValue, actionJs, styleCss, visible} = props
  const style = useEffectStyle(styleCss)

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display: visible ? 'none':'block'}} className='label'>
      <span onClick={onClick} style={{...style,display:'inline-block'}}>{attributeValue || '标签'}</span>
    </div>
  )
}

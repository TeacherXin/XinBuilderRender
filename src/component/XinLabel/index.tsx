import React from 'react'
import './index.css'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { labelJson } from '../../interface/labelJson'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinLabel(props: labelJson) {
  const {attributeValue, actionJs, styleCss, visible, comId} = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({attributeValue, visible}, comId)

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display: state.visible ? 'none':'block'}} className='label'>
      <span onClick={onClick} style={{...style,display:'inline-block'}}>{state.attributeValue || '标签'}</span>
    </div>
  )
}

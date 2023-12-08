import React from 'react'
import { Radio } from 'antd'
import { radioJson } from '../../interface/radioJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinRadio(props: radioJson) {
  const {attributeValue, actionJs, styleCss, disabled, checked, comId, visible} = props
  const style = useEffectStyle(styleCss);
  const state = useStateValue({attributeValue, disabled, checked, visible}, comId)

  const onClick = (e: React.MouseEvent<HTMLElement,MouseEvent>) => {
    // eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.click || '');
    changeFun(e)
  }

  const onChange = (e: any) =>{
    // eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e)
  }


  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      <Radio
        checked={state.checked}
        disabled={state.disabled}
        style={style}
        onClick={onClick}
        onChange={onChange}
        value={comId}
      >
        {state.attributeValue || 'Radio'}
      </Radio>
    </div>
  )
}

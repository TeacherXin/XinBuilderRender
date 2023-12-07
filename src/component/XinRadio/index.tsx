import React from 'react'
import { Radio } from 'antd'
import { radioJson } from '../../interface/radioJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'

export default function XinRadio(props: radioJson) {
  const {attributeValue, actionJs, styleCss, disabled, checked, comId, visible} = props
  const style = useEffectStyle(styleCss);

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
    <div style={{display: visible ? 'none':'block'}}>
      <Radio
        checked={checked}
        disabled={disabled}
        style={style}
        onClick={onClick}
        onChange={onChange}
        value={comId}
      >
        {attributeValue || 'Radio'}
      </Radio>
    </div>
  )
}

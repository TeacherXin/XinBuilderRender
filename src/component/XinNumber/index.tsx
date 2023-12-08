import React, {useState, useEffect} from 'react'
import { InputNumber } from 'antd'
import { numberJson } from '../../interface/numberJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinNumber(props: numberJson) {
  const {
    attributeValueNumber,
    styleCss,
    actionJs,
    requiredMessage,
    size,
    prefix,
    visible,
    max,
    min,
    step,
    comId
  } = props
  const [value,setValue] = useState<number | null | undefined>(undefined);
  const style = useEffectStyle(styleCss);
  const state = useStateValue({attributeValueNumber, styleCss, requiredMessage, size, prefix, visible, max, min, step}, comId)

  const onChange = (value: any) =>{
    setValue(value);
    // eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(value)
  }

  useEffect(() => {
    setValue(attributeValueNumber)
  },[attributeValueNumber])

  return (
    <div style={{display: visible ? 'none':'block'}}>
      <InputNumber
        size={state.size}
        prefix={state.prefix}
        value={value || undefined}
        onChange={onChange}
        placeholder={state.requiredMessage}
        style={style}
        max={state.max}
        min={state.min}
        step={state.step}
      />
    </div>
  )
}

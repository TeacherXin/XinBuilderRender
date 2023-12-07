import React, {useState, useEffect} from 'react'
import { InputNumber } from 'antd'
import { numberJson } from '../../interface/numberJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'

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
    step
  } = props
  const [value,setValue] = useState<number | null | undefined>(undefined);
  const style = useEffectStyle(styleCss);

  const onChange = (value: number | null | undefined) =>{
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
        size={size}
        prefix={prefix}
        value={value || undefined}
        onChange={onChange}
        placeholder={requiredMessage}
        style={style}
        max={max}
        min={min}
        step={step}
      />
    </div>
  )
}



import React, { useEffect, useState } from 'react'
import './index.css'
import { Input } from 'antd'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { inputJson } from '../../interface/inputJson';

export default function XinInput(props: inputJson) {
  const {
    attributeValue,
    styleCss,
    actionJs,
    addonBefore,
    addonAfter,
    placeholder,
    size,
    prefix,
    suffix,
    allowClear,
    showCount,
    visible
  } = props
  const [value,setValue] = useState<string | number | undefined>('');
  const [InputComponent, setInputComponent] = useState<any>(Input);

  const style = useEffectStyle(styleCss);

  useEffect(() => {
    if(props.inputType === 'text'){
      setInputComponent(Input)
    }else if(props.inputType === 'Search'){
      setInputComponent(Input.Search)
    }else if(props.inputType === 'Password'){
      setInputComponent(Input.Password)
    }else if(props.inputType === 'TextArea'){
      setInputComponent(Input.TextArea)
    }
  },[props.inputType])

  useEffect(() => {
    setValue(attributeValue)
  },[attributeValue])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
    // eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e)
  }

  return (
    <div style={{display: visible ? 'none':'block'}} className='componentInput'>
      <InputComponent
        size={size}
        prefix={prefix}
        suffix={suffix}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        allowClear={allowClear}
        showCount={showCount}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
    </div>
  )
}
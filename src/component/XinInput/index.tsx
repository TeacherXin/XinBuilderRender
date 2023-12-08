

import React, { useEffect, useState } from 'react'
import './index.css'
import { Input } from 'antd'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { inputJson } from '../../interface/inputJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

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
    visible,
    comId
  } = props
  const [value,setValue] = useState<string | number | undefined>('');
  const [InputComponent, setInputComponent] = useState<any>(Input);

  const style = useEffectStyle(styleCss);
  const state = useStateValue({attributeValue, addonAfter, addonBefore, placeholder, size, prefix, suffix, allowClear, showCount, visible}, comId)

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
    <div style={{display: state.visible ? 'none':'block'}} className='componentInput'>
      <InputComponent
        size={state.size}
        prefix={state.prefix}
        suffix={state.suffix}
        addonBefore={state.addonBefore}
        addonAfter={state.addonAfter}
        allowClear={state.allowClear}
        showCount={state.showCount}
        value={value || ''}
        onChange={onChange}
        placeholder={state.placeholder}
        style={style}
      />
    </div>
  )
}
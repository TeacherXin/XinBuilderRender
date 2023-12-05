

import React from 'react'
import { Button } from 'antd';
import { PageJsonComponent } from '../../interface/pageJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { buttonJson } from '../../interface/buttonJson';

export default function XinButton(props: buttonJson) {
  const {
    attributeValue, 
    actionJs, 
    styleCss, 
    buttonType, 
    size,
    disabled,
    danger,
    ghost,
    visible
  } = props

  const style = useEffectStyle(styleCss)

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display: visible ? 'none':'block'}} id='componentButton'>
      <Button
        type={buttonType || 'primary'}
        onClick={onClick}
        size={size}
        disabled={disabled}
        danger={danger}
        ghost={ghost}
        style={style}
      >
        {attributeValue || '默认按钮'}
      </Button>
    </div>
  )
}

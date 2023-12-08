

import React from 'react'
import { Button } from 'antd';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { buttonJson } from '../../interface/buttonJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

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
    visible,
    comId
  } = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({attributeValue, buttonType, size, disabled, danger, ghost, visible}, comId)

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  return (
    <div style={{display: visible ? 'none':'block'}} id='componentButton'>
      <Button
        type={state.buttonType || 'primary'}
        onClick={onClick}
        size={state.size}
        disabled={state.disabled}
        danger={state.danger}
        ghost={state.ghost}
        style={style}
      >
        {state.attributeValue || '默认按钮'}
      </Button>
    </div>
  )
}

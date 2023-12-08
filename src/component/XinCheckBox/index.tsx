import { Checkbox } from 'antd'
import { checkboxJson } from '../../interface/checkboxJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinCheckBox(props: checkboxJson) {
  const {attributeValue, actionJs, styleCss, disabled, checked, visible, comId} = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({attributeValue, disabled, checked, visible}, comId)

  const onChange = (e: any) =>{
    //eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e);
  }

  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      <Checkbox
        checked={state.checked}
        disabled={state.disabled}
        style={style}
        onChange={onChange}
      >
        {state.attributeValue || 'CheckBox'}
      </Checkbox>
    </div>
  )
}

import { Checkbox } from 'antd'
import { checkboxJson } from '../../interface/checkboxJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'

export default function XinCheckBox(props: checkboxJson) {
  const {attributeValue, actionJs, styleCss, disabled, checked, visible} = props
  const style = useEffectStyle(styleCss)

  const onChange = (e: any) =>{
    //eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e);
  }

  return (
    <div style={{display: visible ? 'none':'block'}}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        style={style}
        onChange={onChange}
      >
        {attributeValue || 'CheckBox'}
      </Checkbox>
    </div>
  )
}

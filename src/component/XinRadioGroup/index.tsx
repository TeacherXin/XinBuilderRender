import { Radio, RadioChangeEvent } from 'antd';
import { radiogroupJson } from '../../interface/radiogroupJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinRadioGroup(props: radiogroupJson) {
  const {
    styleCss,
    disabled,
    visible,
    size,
    optionType,
    buttonStyle,
    actionJs,
    selectedID,
    comId
  } = props
  const style = useEffectStyle(styleCss);
  const state = useStateValue({disabled, visible, size, optionType, buttonStyle, selectedID}, comId)

  const onChange = (e: RadioChangeEvent) => {
    //eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e)
  };

  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      <Radio.Group
        value={state.selectedID}
        style={style}
        onChange={onChange}
        disabled={state.disabled}
        optionType={state.optionType}
        buttonStyle={state.buttonStyle}
        size={state.size}
      >
        {(props?.children || []).map(item => {
          return <div key={item?.['key' as keyof typeof item] || ''}>{item}</div>
        })}
      </Radio.Group>
    </div>
  )
}

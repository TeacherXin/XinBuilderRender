import { Radio, RadioChangeEvent } from 'antd';
import { radiogroupJson } from '../../interface/radiogroupJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';

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
  } = props
  const style = useEffectStyle(styleCss);

  const onChange = (e: RadioChangeEvent) => {
    //eslint-disable-next-line no-new-func
    const changeFun = new Function(actionJs?.change || '');
    changeFun(e)
  };

  return (
    <div style={{display: visible ? 'none':'block'}}>
      <Radio.Group
        value={selectedID}
        style={style}
        onChange={onChange}
        disabled={disabled}
        optionType={optionType}
        buttonStyle={buttonStyle}
        size={size}
      >
        {(props?.children || []).map(item => {
          return <div key={item?.['key' as keyof typeof item] || ''}>{item}</div>
        })}
      </Radio.Group>
    </div>
  )
}

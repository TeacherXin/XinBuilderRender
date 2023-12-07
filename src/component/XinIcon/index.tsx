import { iconJson } from '../../interface/iconJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'

export default function XinIcon(props: iconJson) {
  const {styleCss, iconType, twoToneColor, rotate, visible, actionJs } = props
  const style = useEffectStyle(styleCss)

  const onClick = (e: any) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  let name = iconType || ''
  let Ctor = require('@ant-design/icons')[name] ? require('@ant-design/icons')[name] : require('@ant-design/icons')['SmileOutlined'];

  return (
    <div style={{display: visible ? 'none':'block'}}>
      {
        <Ctor onClick={onClick} twoToneColor={twoToneColor} style={style} rotate={rotate} />
      }
    </div>
  )
}

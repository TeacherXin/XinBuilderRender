import { iconJson } from '../../interface/iconJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinIcon(props: iconJson) {
  const {styleCss, iconType, twoToneColor, rotate, visible, actionJs, comId } = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({iconType, twoToneColor, rotate, visible}, comId)

  const onClick = (e: any) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  let name = state.iconType || ''
  let Ctor = require('@ant-design/icons')[name] ? require('@ant-design/icons')[name] : require('@ant-design/icons')['SmileOutlined'];

  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      {
        <Ctor onClick={onClick} twoToneColor={state.twoToneColor} style={style} rotate={state.rotate} />
      }
    </div>
  )
}

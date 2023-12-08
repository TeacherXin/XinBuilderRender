import { flexJson } from '../../interface/flexJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import useStateValue from '../../utils/componetUtils/useStateValue'

export default function XinFlex(props: flexJson) {
  const { styleCss,visible, comId } = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({visible}, comId)

  return (
    <div style={{display: state.visible ? 'none' : 'block'}}>
      <div style={{...style,display:'flex'}}>
        {(props?.children || []).map(item => {
          return item
        })}
      </div>
    </div>
  )
}

import { flexJson } from '../../interface/flexJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'

export default function XinFlex(props: flexJson) {
  const { styleCss,visible } = props
  const style = useEffectStyle(styleCss)

  return (
    <div style={{display: visible ? 'none' : 'block'}}>
      <div style={{...style,display:'flex'}}>
        {(props?.children || []).map(item => {
          return item
        })}
      </div>
    </div>
  )
}

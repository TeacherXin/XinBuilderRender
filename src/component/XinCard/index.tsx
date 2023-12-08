import { Card } from 'antd';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { cardJson } from '../../interface/cardJson';
import useStateValue from '../../utils/componetUtils/useStateValue';


export default function XinCard(props: cardJson) {
  const { styleCss, size, title, bordered, visible, comId } = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({ size, title, bordered, visible }, comId)

  return (
    <div style={{display: state.visible ? 'none' : 'block'}}>
      <Card
        size={state.size}
        title={state.title || '卡片标题'}
        bordered={state.bordered}
      >
        <div style={style}>
          {(props?.children || []).map(item => {
            return item
          })}
        </div>
      </Card>
    </div>
  )
}

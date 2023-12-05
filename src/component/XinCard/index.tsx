import { Card } from 'antd';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { cardJson } from '../../interface/cardJson';


export default function XinCard(props: cardJson) {
  const { styleCss, size, title, bordered, visible } = props
  const style = useEffectStyle(styleCss)

  return (
    <div style={{display: visible ? 'none' : 'block'}}>
      <Card
        size={size}
        title={title || '卡片标题'}
        bordered={bordered}
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

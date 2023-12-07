import { listitemJson } from '../../interface/listitemJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { List } from 'antd';

export default function XinListItem(props: listitemJson) {
  const {styleCss, description, title} = props
  const style = useEffectStyle(styleCss)

  return (
    <List.Item style={style}>
      <List.Item.Meta
        title={title || 'title'}
        description={description || 'this is the listItem description'}
      />
    </List.Item>
  )
}

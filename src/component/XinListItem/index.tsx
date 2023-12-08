import { listitemJson } from '../../interface/listitemJson'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { List } from 'antd';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinListItem(props: listitemJson) {
  const {styleCss, description, title, comId} = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({description, title}, comId)

  return (
    <List.Item style={style}>
      <List.Item.Meta
        title={state.title || 'title'}
        description={state.description || 'this is the listItem description'}
      />
    </List.Item>
  )
}

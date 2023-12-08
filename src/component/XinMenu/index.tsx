import { Menu } from 'antd'
import { menuJson } from '../../interface/menuJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinMenu(props: menuJson) {
  const {styleCss, mode, visible, actionJs, selectedKey, comId } = props
  const style = useEffectStyle(styleCss);
  const state = useStateValue({mode, visible, selectedKey}, comId)

  const onSelect= ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    // eslint-disable-next-line no-new-func
    let changeFun = new Function(actionJs?.change || '');
    changeFun({ item, key, keyPath, selectedKeys, domEvent })
  }

  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      <Menu
        selectedKeys={[state.selectedKey || '']}
        onSelect={onSelect}
        mode={state.mode}
        style={style}
        items={
          (props.children || []).map(element => {
            return {
              label: element,
              key: element?.['key' as keyof typeof element] || ''
            }
          })
        }
      />
    </div>
  )
}

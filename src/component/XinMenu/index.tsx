import { Menu } from 'antd'
import { menuJson } from '../../interface/menuJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';

export default function XinMenu(props: menuJson) {
  const {styleCss, mode, visible, actionJs, selectedKey } = props
  const style = useEffectStyle(styleCss);

  const onSelect= ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    // eslint-disable-next-line no-new-func
    let changeFun = new Function(actionJs?.change || '');
    changeFun({ item, key, keyPath, selectedKeys, domEvent })
  }

  return (
    <div style={{display: visible ? 'none':'block'}}>
      <Menu
        selectedKeys={[selectedKey || '']}
        onSelect={onSelect}
        mode={mode}
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

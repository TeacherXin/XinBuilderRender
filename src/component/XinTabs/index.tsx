import {useState, useEffect} from 'react'
import { Tabs } from 'antd';
import { tabsJson } from '../../interface/tabsJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { findNodeByComId } from '../../utils/nodeUtils.ts/getNode';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinTabs(props: tabsJson) {
  const {
    styleCss,
    actionJs,
    activeKey,
    animated,
    centered,
    size,
    tabPosition,
    tabBarGutter,
    tabsType,
    comId
  } = props
  const [items, setItems] = useState<{ key: string; label: any; children: any; }[]>([])
  const style = useEffectStyle(styleCss)
  const state = useStateValue({activeKey, animated, centered, size, tabBarGutter, tabPosition, tabsType}, comId)

  useEffect(() => {
    const children = props.children || [];
    const items = children.map((item,index) => {
      const key = item?.['key' as keyof typeof item] || index + ''
      return {
        key: key,
        label: findNodeByComId(key)?.attributeValue || key,
        children: item
      }
    })
    setItems(items)
  },[props.children])

  const onChange = (value: string) => {
    // eslint-disable-next-line no-new-func
    let fun = new Function(actionJs?.change || '');
    fun(value)
  }

  return (
    <div>
      <Tabs
        style={style}
        items={items}
        activeKey={state.activeKey}
        animated={state.animated}
        centered={state.centered}
        size={state.size}
        tabPosition={state.tabPosition}
        tabBarGutter={parseInt(state.tabBarGutter || '50')}
        type={state.tabsType}
        onChange={onChange}
      />
    </div>
  )
}

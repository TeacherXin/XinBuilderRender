import {useState, useEffect} from 'react'
import { Tabs } from 'antd';
import { tabsJson } from '../../interface/tabsJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { findNodeByComId } from '../../utils/nodeUtils.ts/getNode';

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
    tabsType
  } = props
  const [items, setItems] = useState<{ key: string; label: any; children: any; }[]>([])
  const style = useEffectStyle(styleCss)

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
        activeKey={activeKey}
        animated={animated}
        centered={centered}
        size={size}
        tabPosition={tabPosition}
        tabBarGutter={parseInt(tabBarGutter || '50')}
        type={tabsType}
        onChange={onChange}
      />
    </div>
  )
}

import {useEffect, useState} from 'react'
import { List } from 'antd';
import './index.css'
import { listJson } from '../../interface/listJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { findNodeByComId } from '../../utils/nodeUtils.ts/getNode';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinList(props: listJson) {
  const { styleCss, children, bordered, size, actionJs, comId } = props;
  // list组件的data
  const [data, setData] = useState<{[key: string]: string}[]| undefined>(undefined)
  const style = useEffectStyle(styleCss)
  const state = useStateValue({bordered, size}, comId)

  useEffect(() => {
    // eslint-disable-next-line no-new-func
    let loadFun = new Function(actionJs?.load || '');
    loadFun()
  },[actionJs])

  useEffect(() => {
    const data = (props.children || []).map(item => {
      const key = item?.['key' as keyof typeof item] || ''
      return {
        title: findNodeByComId(key)?.attributeValue as string || '123'
      }
    })
    setData(data)
  },[props.children])

  
  return (
    <div className='ListItem'>
      <List
        style={style}
        itemLayout="vertical"
        dataSource={data}
        bordered={state.bordered}
        size={state.size}
      >
        {
          (children || []).map((item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={item}
              />
            </List.Item>
          ))
        }
      </List>
    </div>
  )
}

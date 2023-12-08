import { ReactNode, useEffect, useState } from 'react'
import { PageJson, PageJsonComponent } from '.././interface/pageJson'
import { findNodeByComId } from '../utils/nodeUtils.ts/getNode'
import * as myComponent from '../component'
import { message } from 'antd'
import axios from 'axios'
import { moduleCpmputed } from './modalComputed'


export default function MetaRender(props: {pageJson: PageJson}) {

  const [pageJson, setPageJson] = useState<PageJson>({})

  useEffect(() => {
    const pageId = window.location.search.replace('?pageId=','');
    axios.post(`http://${window.location.hostname}:80/pageJson/findPageByID`, {
      pageId
    }).then(res => {
      if(res.data.data) {
        setPageJson(res.data.data.pageJson)
        moduleCpmputed(res.data.data.pageJson)
      }else{
        message.error('页面查询失败')
      }
    }).catch(err => {
      message.error('页面查询失败')
    })
  },[])

  const getComponent = (pageComponent: PageJsonComponent | any): ReactNode => {
    let Com =  myComponent[pageComponent.comType as keyof typeof myComponent];
    if(!Com && pageComponent.groupType === 'defineCom'){
      // eslint-disable-next-line no-new-func
      let fun = new Function('return ' + pageComponent.component)
      Com = fun();
    }
    if(!Com){
      return <div id={`noRender-${pageComponent.comId}`} key={pageComponent.comId}></div>
    }
    return <div id={pageComponent.comId} key={pageComponent.comId} style={pageComponent.style}>
    {<Com
      {...findNodeByComId(pageComponent.comId,pageJson)}
      >
        {
          Object.keys(pageComponent.childList || {}).map(_item => {
            return getComponent(pageComponent.childList[_item])
          })
        }
      </Com>
    }
  </div>
  }

  return (
    <div>
      {(Object.keys(pageJson)).map(item => {
        if(pageJson[item]) {
          return getComponent(pageJson[item])
        }else{
          return <></>
        }
      })}
    </div>
  )
}

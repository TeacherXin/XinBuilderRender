import { ReactNode } from "react"
import { buttonJson } from "./buttonJson"
import { cardJson } from "./cardJson"
import { carouselJson } from "./carouselJson"
import { divJson } from "./divJson"
import { flexJson } from "./flexJson"
import { formJson } from "./formJson"
import { inputJson } from "./inputJson"
import { listitemJson } from "./listitemJson"
import { listJson } from "./listJson"
import { menuJson } from "./menuJson"
import { radiogroupJson } from "./radiogroupJson"
import { radioJson } from "./radioJson"

export interface PageJsonComponent {
  children?: Array<ReactNode>
  // Node的样式
  style?: object | undefined,
  // Node的Id
  comId: string,
  // Node的组件类型
  comType: string,
  // Node的分组类型
  groupType: string,
  // Node属性值
  attributeValue?: number | string | undefined,
  // Node的子节点
  childList?: PageJson | undefined,
  // Node的动作JS
  actionJs?: {[key: string]: string} | undefined,
  // 是否显示
  visible?: boolean | undefined
  // Node的样式配置
  styleCss?: string | undefined,
  // 禁用组件
  disabled?: boolean | undefined,
  // 标签
  label?: string | undefined,
  // 必填
  required?: boolean | undefined,
  // 必填提示信息
  requiredMessage?: string | undefined
  // 自定义组件 -- 组件的函数
  component?: Function | undefined,
}

export interface PageJson {
  [key: string]:  buttonJson | cardJson | formJson | inputJson | carouselJson | divJson | menuJson | radiogroupJson | radioJson
  | flexJson | listitemJson | listJson
}
import { ReactNode } from "react"

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
  // Input -- 标签
  label?: string | undefined,
  // Input -- 允许清除
  allowClear?: boolean | undefined,
  // Input -- 必填
  required?: boolean | undefined,
  // 前置标签
  addonBefore?: string | undefined,
  // 后置标签
  addonAfter?: string | undefined,
  // 提示文本
  placeholder?: string | undefined,
  // 前缀
  prefix?: string | undefined,
  // 后缀
  suffix?: string | undefined,
  // 展示计数
  showCount?: string | undefined,
  // 文本框类型
  inputType?: string | undefined,
  // Form -- 布局
  layout?: 'horizontal' | 'inline' | 'vertical' | undefined,
  // Form -- 标题冒号
  colon?: boolean | undefined,
  // Form -- 标题对齐方式
  labelAlign?: 'left' | 'right' | undefined
  // Form -- 必填提示信息
  requiredMessage?: string | undefined
  // Button -- 按钮类型
  buttonType?: "link" | "text" | "primary" | "default" | "dashed" | undefined,
  // Button -- 危险按钮
  danger?: boolean | undefined,
  // Button -- 幽灵按钮
  ghost?: boolean | undefined,
  // 自定义组件 -- 组件的函数
  component?: Function | undefined,
  // Card -- 标题
  title?: string | undefined,
  bordered?: boolean | undefined
}

export interface PageJson {
  [key: string]: PageJsonComponent
}
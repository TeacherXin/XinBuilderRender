import { PageJsonComponent } from "./pageJson";

export interface formJson extends PageJsonComponent {
  // 布局
  layout?: 'horizontal' | 'inline' | 'vertical' | undefined,
  // 标题冒号
  colon?: boolean | undefined,
  // 标题对齐方式
  labelAlign?: 'left' | 'right' | undefined
  // 必填提示信息
  requiredMessage?: string | undefined,
  size?: 'small' | 'middle' | 'large' | undefined,
}
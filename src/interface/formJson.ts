import { PageJsonComponent } from "./pageJson";

export interface formJson extends PageJsonComponent {
  // Form -- 布局
  layout?: 'horizontal' | 'inline' | 'vertical' | undefined,
  // Form -- 标题冒号
  colon?: boolean | undefined,
  // Form -- 标题对齐方式
  labelAlign?: 'left' | 'right' | undefined
  // Form -- 必填提示信息
  requiredMessage?: string | undefined,
  size?: 'small' | 'middle' | 'large' | undefined,
}
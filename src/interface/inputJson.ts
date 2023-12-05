import { PageJsonComponent } from "./pageJson";

export interface inputJson extends PageJsonComponent {
  // Input -- 标签
  label?: string | undefined,
  // Input -- 允许清除
  allowClear?: boolean | undefined,
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
  size?: 'small' | 'middle' | 'large' | undefined,
}
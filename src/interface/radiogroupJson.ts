import { PageJsonComponent } from "./pageJson";

export interface radiogroupJson extends PageJsonComponent {
  // 组件大小
  size: 'small' | 'middle' | 'large'  | undefined,
  // 按钮风格
  optionType: 'default' | 'button' | undefined,
  // 单选类型
  buttonStyle: 'outline' | 'solid' | undefined,
  // 选中节点ID
  selectedID: string | undefined
}
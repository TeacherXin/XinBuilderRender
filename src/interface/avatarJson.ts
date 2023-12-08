import { PageJsonComponent } from "./pageJson";

export interface avatarJson extends PageJsonComponent {
  //组件大小
  size: 'large' | 'small' | 'default' | undefined
  // 图标类型
  iconType: string | undefined,
  // 形状
  shape: 'circle' | 'square' | undefined,
  // 资源地址
  src: string | undefined
}
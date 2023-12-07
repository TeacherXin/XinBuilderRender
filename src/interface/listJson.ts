import { PageJsonComponent } from "./pageJson";

export interface listJson extends PageJsonComponent {
  // 展示边框
  bordered: boolean | undefined,
  // 组件大小
  size: 'small' | 'default' | 'large' | undefined
}
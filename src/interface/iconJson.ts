import { PageJsonComponent } from "./pageJson";

export interface iconJson extends PageJsonComponent {
  // 图标类型
  iconType: string | undefined,
  // 主题色
  twoToneColor: string | undefined,
  // 旋转角度
  rotate: number | undefined
}
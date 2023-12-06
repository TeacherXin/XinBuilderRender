import { PageJsonComponent } from "./pageJson";

export interface cardJson extends PageJsonComponent {
  // 标题
  title?: string | undefined,
  // 是否展示边框
  bordered?: boolean | undefined,
  // 大小
  size?: 'default' | 'small' | undefined
}
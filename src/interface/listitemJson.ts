import { PageJsonComponent } from "./pageJson";

export interface listitemJson extends PageJsonComponent {
  // 内容
  description: string | undefined,
  // 标题
  title: string | undefined
}
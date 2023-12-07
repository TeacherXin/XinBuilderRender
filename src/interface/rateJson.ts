import { PageJsonComponent } from "./pageJson";

export interface rateJson extends PageJsonComponent {
  // start总数
  count: number | undefined
  // 允许半选
  allowHalf: boolean | undefined
}
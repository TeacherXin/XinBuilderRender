import { PageJsonComponent } from "./pageJson";

export interface buttonJson extends PageJsonComponent {
  // 按钮类型
  buttonType?: "link" | "text" | "primary" | "default" | "dashed" | undefined,
  // 危险按钮
  danger?: boolean | undefined,
  // 幽灵按钮
  ghost?: boolean | undefined,
  // 按钮大小
  size?: 'small' | 'middle' | 'large' | undefined,
}
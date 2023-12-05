import { PageJsonComponent } from "./pageJson";

export interface buttonJson extends PageJsonComponent {
  // Button -- 按钮类型
  buttonType?: "link" | "text" | "primary" | "default" | "dashed" | undefined,
  // Button -- 危险按钮
  danger?: boolean | undefined,
  // Button -- 幽灵按钮
  ghost?: boolean | undefined,
  size?: 'small' | 'middle' | 'large' | undefined,
}
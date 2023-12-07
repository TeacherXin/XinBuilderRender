import { PageJsonComponent } from "./pageJson";

export interface tabsJson extends PageJsonComponent {
  // 当前key
  activeKey: string | undefined,
  // 开启动画
  animated: boolean | undefined,
  // 标签居中
  centered: boolean | undefined,
  // 组件大小
  size: 'small' | 'middle' | 'large' | undefined,
  // 页签位置
  tabPosition: 'left' | 'right' | 'top' | 'bottom' | undefined,
  // 页签间隙
  tabBarGutter: string | undefined,
  // 页签样式
  tabsType: 'line' | 'card' | 'editable-card' | undefined
}
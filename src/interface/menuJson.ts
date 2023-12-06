import { PageJsonComponent } from "./pageJson";

export interface menuJson extends PageJsonComponent {
  mode?: 'horizontal' | 'vertical' | 'inline' | undefined,
  selectedKey?: string | undefined
}
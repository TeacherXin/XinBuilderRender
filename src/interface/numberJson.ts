import { PageJsonComponent } from "./pageJson";

export interface numberJson extends PageJsonComponent {
  attributeValueNumber: number | undefined,
  size: 'small' | 'middle' | 'large' | undefined,
  prefix: string | undefined,
  showCount: string | undefined,
  max: number | undefined,
  min: number | undefined,
  step: number | undefined
}
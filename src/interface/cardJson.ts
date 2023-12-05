import { PageJsonComponent } from "./pageJson";

export interface cardJson extends PageJsonComponent {
  title?: string | undefined,
  bordered?: boolean | undefined,
  size?: 'default' | 'small' | undefined
}
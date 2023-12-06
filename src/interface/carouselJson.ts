import { PageJsonComponent } from "./pageJson";

export interface carouselJson extends PageJsonComponent {
  // 自动切换
  autoplay: boolean | undefined
}
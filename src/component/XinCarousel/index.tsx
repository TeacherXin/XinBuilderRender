import { Carousel } from 'antd'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { carouselJson } from '../../interface/carouselJson';

export default function XinCarousel(props: carouselJson) {
  const { styleCss, visible, autoplay, actionJs} = props;
  const style = useEffectStyle(styleCss);

  const onChange = (value: number) => {
    // eslint-disable-next-line no-new-func
    let fun = new Function(actionJs?.change || '');
    fun(value)
  }

  return (
    <div style={{display:visible? 'none':'block',...style}}>
      <Carousel
        autoplay={autoplay}
        afterChange={onChange}
      >
        {(props?.children || []).map(item => {
          return item
        })}
      </Carousel>
    </div>
  )
}

import { Carousel } from 'antd'
import useEffectStyle from '../../utils/componetUtils/useEffectStyle'
import { carouselJson } from '../../interface/carouselJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinCarousel(props: carouselJson) {
  const { styleCss, visible, autoplay, actionJs, comId} = props;
  const style = useEffectStyle(styleCss);
  const state = useStateValue({ visible, autoplay }, comId)

  const onChange = (value: number) => {
    // eslint-disable-next-line no-new-func
    let fun = new Function(actionJs?.change || '');
    fun(value)
  }

  return (
    <div style={{display:state.visible? 'none':'block',...style}}>
      <Carousel
        autoplay={state.autoplay}
        afterChange={onChange}
      >
        {(props?.children || []).map(item => {
          return item
        })}
      </Carousel>
    </div>
  )
}

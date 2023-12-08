import {Avatar} from 'antd';
import { avatarJson } from '../../interface/avatarJson';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinAvatar(props: avatarJson) {
  const {size, iconType, shape, src, styleCss, actionJs, comId} = props
  const style = useEffectStyle(styleCss)
  const state = useStateValue({iconType, shape}, comId)

  const onClick = (e:any) => {
    // eslint-disable-next-line no-new-func
    let clickFun = new Function(actionJs?.click || '');
    clickFun(e)
  }

  let Ctor = require('@ant-design/icons')[state.iconType || ''] ? require('@ant-design/icons')[state.iconType || ''] : require('@ant-design/icons')['UserOutlined'];


  return (
    <div>
      <Avatar onClick={onClick} style={style} shape={state.shape} size={size} icon={<Ctor />} src={src} />
    </div>
  )
}

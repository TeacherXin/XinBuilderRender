import {Form } from 'antd';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { formJson } from '../../interface/formJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinForm(props: formJson) {
  const {
    styleCss,
    disabled,
    size,
    layout,
    colon,
    labelAlign,
    visible,
    childList,
    comId
  } = props

  const style = useEffectStyle(styleCss)
  const state = useStateValue({disabled, size, layout, colon, labelAlign, visible}, comId)

  return (
    <div style={{display: state.visible ? 'none':'block'}}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={style}
        disabled={state.disabled}
        size={state.size}
        layout={state.layout}
        colon={state.colon}
        labelAlign={state.labelAlign}
      >
          {(props?.children || []).map(item => {
            const comId = item?.['key' as keyof typeof item] || ''
            const node = childList?.[comId as keyof typeof childList]
            return <Form.Item
                    style={{display: node?.visible ? 'none':'block'}}
                    key={comId}
                    label={node?.label}
                    name={node?.label}
                    rules={[{required: node?.required,message:node?.requiredMessage}]}
                >
                {item}
              </Form.Item>
          })}
      </Form>
    </div>
  )
}

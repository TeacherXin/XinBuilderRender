import {Form } from 'antd';
import useEffectStyle from '../../utils/componetUtils/useEffectStyle';
import { formJson } from '../../interface/formJson';

export default function XinForm(props: formJson) {
  const {
    styleCss,
    disabled,
    size,
    layout,
    colon,
    labelAlign,
    visible,
    childList
  } = props

  const style = useEffectStyle(styleCss)

  return (
    <div style={{display: visible ? 'none':'block'}}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={style}
        disabled={disabled}
        size={size}
        layout={layout}
        colon={colon}
        labelAlign={labelAlign}
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

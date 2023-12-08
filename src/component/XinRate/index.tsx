import React from 'react'
import { Rate } from 'antd';
import { rateJson } from '../../interface/rateJson';
import useStateValue from '../../utils/componetUtils/useStateValue';

export default function XinRate(props: rateJson) {
  const {allowHalf, count, disabled, comId} = props;
  const state = useStateValue({allowHalf, count, disabled}, comId)

  const getCount = (count: number | undefined) => {
    if(count && count > 0){
      return parseInt(count + '')
    }else{
      return 5;
    }
  }

  return (
    <div>
      <Rate
        allowHalf={state.allowHalf}
        count={getCount(state.count)}
        disabled={state.disabled}
      />
    </div>
  )
}

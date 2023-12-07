import React from 'react'
import { Rate } from 'antd';
import { rateJson } from '../../interface/rateJson';

export default function XinRate(props: rateJson) {
  const {allowHalf, count, disabled} = props;

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
        allowHalf={allowHalf}
        count={getCount(count)}
        disabled={disabled}
      />
    </div>
  )
}

import React from 'react'

export const Small =  React.memo(({value}) => {
    console.log("Me volvi a llamar :8");
  return (
    <small>{ value }</small>
  )
})

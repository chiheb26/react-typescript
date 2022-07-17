import React from 'react'
type OscrarProps = {
    children : React.ReactNode
}
export const Oscar = (props:OscrarProps) => {
  return (
    <div>{props.children}</div>
  )
}

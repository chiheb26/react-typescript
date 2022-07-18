import React from 'react'

type HorizontalPosition = 'Left' | 'Center' | 'Right'
type VerticalPosition = 'Top' | 'Center' | 'Bottom'
type ToastProps = {
    position : Exclude<`${HorizontalPosition} - ${VerticalPosition}`,"Center - Center"> | "Center"
}
export const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}

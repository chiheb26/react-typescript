import React from 'react'
type InputProps = {
    value: string,
    handlechange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}
export const Input = (props: InputProps) => {
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{console.log(event);
    }
  return (
    // <input type="text" value={props.value} onChange={props.handlechange}/>
    <input type="text" value={props.value} onChange={handleInputChange}/>
    )
}

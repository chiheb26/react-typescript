import React from 'react'
import {Name} from './Person.types'
type PersonListProps = {
    names:Name[]
}
export const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.names.map(n=>(<h2 key={n.first}>{n.first} {n.last}</h2>))}
    </div>
  )
}

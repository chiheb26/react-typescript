import React from 'react'
import {Login} from './Login'
import {ProfileProps} from './Profile'
type PrivateProps = {
isLoggedIn:boolean,
component:React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn:loggedIn,component:Componentaaa}:PrivateProps) => {
  if (loggedIn){
    return (
        <Componentaaa name="Guest" />
      )  }else{
        return <Login />
      }

}

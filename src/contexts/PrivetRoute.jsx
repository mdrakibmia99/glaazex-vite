/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "./UserContext"
import { Navigate } from "react-router-dom"

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){

        return <div>Loading...</div>
    }
    if(!user && user.uid){
        return children
    }
    return  <Navigate to={'/login'}/>


}
 

export default PrivetRoute
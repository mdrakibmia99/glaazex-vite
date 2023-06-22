/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "./UserContext"
import { useNavigate } from "react-router-dom"
import HomeLoading from "../components/Loading/HomeLoading"
import { toast } from "react-hot-toast"

const PrivetRoute = ({children}) => {
    const navigate = useNavigate()
    const {user,loading}=useContext(AuthContext)
    if(loading){

        return <HomeLoading/>
    }
    if(user && user.uid && user.emailVerified){
        return children
    }
    if(user && user.uid && !user.emailVerified){
        return (
            toast.error("verify your email")
        )
    }
    
    return   navigate('/login')


}
 

export default PrivetRoute
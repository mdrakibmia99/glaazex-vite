import { useContext, useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/UserContext"


const Reset = () => {
    const {user, ResetPassword } = useContext(AuthContext)
    const navigate=useNavigate()   

    const [email, setEmail] = useState('')

    if(user?.emailVerified){
      navigate('/')
    }
    const handleReset = (e) => {
      e.preventDefault()
      ResetPassword(email)
      .then(() => {
        toast.success("Please Check your email")
      })
      .catch((error) => {
        const errorCode = error.code;
         toast.error(errorCode)
      });
  
      e.target.reset();
      
    }
  
  return (
    <>
     <div className="h-[700px] flex items-center justify-center">
        <div className="w-96 p-7 border-2  shadow-lg rounded-md">
          <h1 className="text-xl text-center">RESET</h1>
          <form
            onSubmit={handleReset}
          >

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                required
                placeholder="Enter your E-mail"
                className={`input input-bordered w-full max-w-xs`} />
            </div>
           
            <input className="bg__bg font-bold cursor-pointer hover:bg-[#96c2a4] w-full mt-5 px-1 py-2 rounded-lg" type="submit" value='RESET' />
          </form>
             
          
        </div>
      </div>
    </>
  )
}

export default Reset
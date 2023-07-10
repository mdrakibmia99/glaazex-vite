import { useContext } from "react"
import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom";



function AfterSignIn() {
    const {LogOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        LogOut().then(() => {
            // Sign-out successful.
            <Navigate to='/home'></Navigate>

          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }
    return (
        <div className="dropdown dropdown-end lg:block md:block hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-[30px] rounded-full">
                    <img src="/public/images/user.svg"  className="w-full object-cover"/>
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a onClick={handleLogOut}>Logout</a></li>
            </ul>
        </div>
    )
}

export default AfterSignIn
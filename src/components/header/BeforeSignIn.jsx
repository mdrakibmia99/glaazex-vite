import { Link } from "react-router-dom"


const BeforeSignIn = () => {
    return (
        <div className="flex flex-row gap-2 ml-5 ">
           <Link to='/login' className="bg-[black] py-2 px-3 rounded-full text-white font-normal hover:shadow-lg hover:scale-[1.05] ease-in-out duration-150">SIGN IN</Link>
        </div>
    )
}

export default BeforeSignIn
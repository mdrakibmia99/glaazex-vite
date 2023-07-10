import { Link } from "react-router-dom"


const BeforeSignIn = () => {
    return (
        <div className=" flex-row gap-2 ml-5  lg:flex md:flex hidden">
           <Link to='/login' className="bg-[black] py-2 px-3 rounded-full text-white font-normal hover:shadow-lg hover:scale-[1.05] ease-in-out duration-150 whitespace-nowrap">SIGN IN</Link>
        </div>
    )
}

export default BeforeSignIn
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/UserContext"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";



const SignIn = () => {
  const { user, signIn } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  if (user?.emailVerified) {
    navigate('/')
  }
  const handleLogin = async(e) => {
    e.preventDefault()
   await signIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user.emailVerified) {
          toast.success(user.displayName, 'Login successful')
          navigate('/')
        } else {
          toast.error("Please verify your email .Check your mail box or spam")

        }


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode)
      });
  }


  return (
    <>
      <div className="h-[700px] flex items-center justify-center">
        <div className="w-96 p-7 border-2  shadow-lg rounded-md">
          <h1 className="text-xl text-center">SIGN IN</h1>
          <form
            onSubmit={handleLogin}
          >

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Enter your E-mail"
                className={`input input-bordered w-full max-w-xs`} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input

                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className=" input input-bordered w-full max-w-xs"
                />
                {/* show hide button for password  */}

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? (
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>

                  ) : (
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path></svg>

                  )}
                </div>

              </div>
            </div>
            <Link to='/reset' className="underline block text-right mt-2 max-w-xs">Forget Password</Link>
            <input
              className="bg__bg font-bold cursor-pointer hover:bg-[#96c2a4] w-full mt-5 px-1 py-2 rounded-lg" type="submit" value='SIGN IN' />
          </form>

          <div className="divider">OR</div>
          <Link to='/registration' className="block text-black-500 font-normal text-center"> CREATE NEW ACCOUNT?</Link>
        </div>
      </div>
    </>
  )
}

export default SignIn
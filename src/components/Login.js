import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header/>
            <div className="w-full h-screen">
                <img 
                    className="w-full h-screen object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/CH-en-20260105-TRIFECTA-perspective_4f97585e-9966-42e9-8929-a4880e478943_small.jpg"
                    alt="Netflix Login Background"
                />
            </div>
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 p-8 rounded text-white w-4/12">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (<input type="email" placeholder="Full Name" className="p-4 my-4 border border-gray-700 rounded w-full bg-gray-700" />)}
                <input type="email" placeholder="Email Address" className="p-4 my-4 border border-gray-700 rounded w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-4 border border-gray-700 rounded w-full bg-gray-700" />
                <button type="submit" className="p-4 my-4 bg-red-600 text-white rounded w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="text-gray-400 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? ' : 'Already registered? '}
                    <span className="text-white">
                        {isSignInForm ? 'Sign Up Now' : 'Sign In Now'}
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login
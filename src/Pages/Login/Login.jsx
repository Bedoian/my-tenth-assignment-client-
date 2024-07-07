import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import git from '../../assets/icons8-github-96.png'
import google from '../../assets/icons8-google-96.png'
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
    const [showPass, setShowPass] = useState(false)

    const{SignIn,signInWithGoogle,signInWithGithub}=useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email=form.email.value;
        const password=form.password.value;
        
        // signIn
        SignIn(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
            toast.error('Invalid Credentials')
        })
      
    }

    const handleGoogle=()=>{
        signInWithGoogle()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    const handleGithub=()=>{
        signInWithGithub()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-orange-500 mb-3">Login Now!</h1>
            <div className="card shrink-0 w-full mx-auto border-2 border-gray-200 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered wfu"
                            required />
                        <span onClick={() => { setShowPass(!showPass) }} className="relative text-xl left-[90%] bottom-8 cursor-pointer">
                            {
                                showPass ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>
                        <label className="label">
                            <a href="#" className="text-green-500 label-text-alt link link-hover text-sm">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn relative bottom-3 bg-orange-400 text-white text-lg">SignUp</button>
                    </div>
                    <p className="text-center">Not a member?<Link to='/signUp' className="text-orange-400 link-hover">SignUp</Link></p>

                    <p className="text-orange-400 text-center text-lg border-b-2 border-dashed border-orange-400">Continue With</p>
                    <div className="flex justify-between mx-7 mt-3">
                        <div onClick={handleGoogle} className="flex border-green-400 rounded-full px-2 pb-1 cursor-pointer link-hover gap-1 border-2 p-1">
                            <img className="w-6 h-6 relative top-1" src={google} alt="" />
                            <p className="text-xl text-green-400">Google</p>
                        </div>
                        <div onClick={handleGithub} className="flex border-blue-400 rounded-full px-2 pb-1 cursor-pointer link-hover gap-1 border-2 p-1">
                            <img className="w-6 h-6 relative top-1" src={git} alt="" />
                            <p className="text-xl text-blue-400">Github</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
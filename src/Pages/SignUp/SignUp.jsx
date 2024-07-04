import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)

    const { signUpWithEmailPassword } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, photoURL } = data

        if(password.length<6){
            return toast.error('Your password should be minimum 6 digits')
        }
        const regex = /^(?=.*[A-Z]).+$/;
        if(!regex.test(password)){
            return toast.error('You Have to enter minimum 1 uppercase')
        }
        const lowRegex = /^(?=.*[a-z]).+$/;
        if(!lowRegex.test(password)){
            return  toast.error('You Have to enter minimum 1 lowercase')
        }


        signUpWithEmailPassword(email, password)
            .then(result => {
                console.log(result)
                toast.success('user created successfully')
                navigate('/login')

                // update user
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div className="mb-20">
            <div>
                <h1 className="text-black text-center text-4xl font-bold my-6">Please Login!</h1>
            </div>
            <div className="card shrink-0 w-full mx-auto border-2 border-gray-200 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="input input-bordered"

                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            {...register("photoURL", { required: true })}
                        />
                        {errors.photoURL && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register("password", { required: true })}
                        />
                        <span onClick={() => { setShowPass(!showPass) }} className="relative text-xl left-[90%] bottom-8 cursor-pointer">
                            {
                                showPass ? <FaEye /> : <FaEyeSlash />
                            }
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </span>
                        <label className="label">
                            <a href="#" className="text-green-500 label-text-alt link link-hover text-sm">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn relative bottom-3 bg-green-500 text-white text-lg">SignUp</button>
                    </div>
                    <p className="text-center">Already have an account?<Link to='/login' className="text-sky-500 link-hover">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
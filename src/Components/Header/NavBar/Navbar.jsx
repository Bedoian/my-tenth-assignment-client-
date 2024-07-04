import { Link, NavLink } from "react-router-dom";
import tIcon from '../../../assets/icons8-airport-100.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
    const navLinks =
        <div className="flex text-xl gap-3 font-semibold">
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 border-2 border-green-600 border-l-0 border-r-0' : ''}><li>Home</li></NavLink>
            <NavLink to='/1' className={({ isActive }) => isActive ? 'text-green-600 border-2 border-green-600 border-l-0 border-r-0' : ''}><li>My List</li></NavLink>
            <NavLink to='/2' className={({ isActive }) => isActive ? 'text-green-600 border-2 border-green-600 border-l-0 border-r-0' : ''}><li>All Spots</li></NavLink>
            <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'text-green-600 border-2 border-green-600 border-l-0 border-r-0' : ''}><li>Add Spots</li></NavLink>
        </div>

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    const { user,LogOut } = useContext(AuthContext)
    const handleLogOut=()=>{
        LogOut()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}

                    </ul>
                </div>
                <div className="flex relative right-24">
                    <img className=" lg:w-16 md:left-80 lg:h-16 w-12 h-12 relative lg:top-0 top-1 lg:left-0 left-1 bottom-2" src={tIcon} alt="" />
                    <p className=" top-3 lg:text-3xl text-xl relative lg:left-0 left-14 lg:right-3 md:left-80 font-semibold ">TouroLogy</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative lg:right-40 md:right-20 ">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <div>
                    {
                        user ?
                            <div className="flex gap-3">
                                   <img className="rounded-full w-14 h-14" src={user.photoURL} />
                                <button onClick={handleLogOut} className="btn bg-teal-500 text-white rounded-full">SignOut</button>
                            </div>
                            :
                            <div className="flex gap-3">
                                <Link to='/login'><button className="btn border-teal-500 bg-white rounded-full border-2 text-teal-500">Login</button></Link>
                                <Link to='/signUp'><button className="btn bg-orange-500 text-white rounded-full">SignUp</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
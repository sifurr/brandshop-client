import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const { test } = useContext(AuthContext);

    const menuItems =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add-brand'}>Add Brand</NavLink></li>
            <li><NavLink to={'/add-product'}>Add Product</NavLink></li>
            <li><NavLink to={'/my-cart'}>My Cart</NavLink></li>
            <li><Link className="lg:hidden block">Login</Link></li>
            <li><Link className="lg:hidden block">First Name</Link></li>
        </>

    return (
        <div className="navbar sticky top-0 w-full bg-opacity-50 z-10 text-white backdrop-filter backdrop-blur-md bg-gray-700 border-b border-gray-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <Link className="normal-case text-xl flex items-center gap-3">
                        <img src="cargo-logo.svg" className="w-[60px] lg:w-[60px]" alt="" />
                        Car GO
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex gap-3">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <Link className="hidden lg:block">Login</Link>
                <Link className="hidden lg:block">First Name</Link>
                <Link className="">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/BwW0WGV/robert-godwin-cdksy-Tq-EXzo-unsplash.jpg" />
                        </div>
                    </label>
                </Link>
            </div>
        </div>
    );
};

export default Header;
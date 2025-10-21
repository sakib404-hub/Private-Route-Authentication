import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { use } from 'react';

const Header = () => {

    // const userInformation = use(AuthContext)
    // console.log(userInformation);
    const { user, signOutUser } = use(AuthContext)
    // console.log(signOutUser)
    // console.log(user.email)
    // console.log(user.displayName)

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    const links = <>
        <li>
            <NavLink to='/'
                className='nav-link'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/login'
                className='nav-link'>Login</NavLink>
        </li>
        <li>
            <NavLink to='/register'
                className='nav-link'>Register</NavLink>
        </li>
        {
            user && (<>
                <li>
                    <NavLink
                        to={'/orders'} className='nav-link'>Orders</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/profile'}
                        className='nav-link'>Profile</NavLink>
                </li>
            </>
            )
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links

                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <a
                        className='btn'
                        onClick={handleSignOutUser}>SignOut</a> : <NavLink to={'/login'} className={'btn'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
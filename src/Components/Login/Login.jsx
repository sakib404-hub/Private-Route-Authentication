import React, { use } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
    const { signIn } = use(AuthContext)
    // console.log(signIn);

    const location = useLocation();
    const path = useNavigate();


    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const password = event.target.password.value;

        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result)
                event.target.reset();
                path(location.state || '/')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto my-50 w-full max-w-md shadow-2xl py-10">
            <h1 className="text-5xl text-center font-bold">Please Login!</h1>
            <div className="card-body">
                <form
                    onSubmit={handleSignIn}>
                    <fieldset className="fieldset">
                        {/* Email Field  */}
                        <label className="label"
                            htmlFor='email'>
                            Email
                        </label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            id='email' />
                        {/* Password Field  */}
                        <label className="label"
                            htmlFor='password'>
                            Password
                        </label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                            id='password'
                            maxLength={6} />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>
                    Don't Have an Account ? <NavLink to={'/register'} className='text-blue-500
                    hover:text-blue-800'>Register</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
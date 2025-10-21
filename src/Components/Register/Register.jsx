import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
    // const userInformation = use(AuthContext)
    // console.log(userInformation);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegistration = (event) => {
        event.preventDefault();
        const username = event.target.username.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value;

        const clearMessageAfterDelay = () => {
            setTimeout(() => {
                setError('');
                setSuccess(false);
            }, 3000)
        }

        console.log(username, email, password)
        // Email Validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please Enter a Valid Email Address!');
            clearMessageAfterDelay();
            return;
        }

        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6}$/;
        if (!passwordRegEx.test(password)) {
            setError('Password must be exactly 6 characters long and include one uppercase letter, one lowercase letter, and one special symbol.')
            clearMessageAfterDelay();
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setSuccess(true);
                console.log(result.user)
                clearMessageAfterDelay();
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
                setError(error.mesaage);
                clearMessageAfterDelay();
            })

    }
    return (
        <div className="card bg-base-100 mx-auto my-50 w-full max-w-md shadow-2xl py-10">
            <h1 className="text-5xl text-center font-bold">Please Register!</h1>
            <div className="card-body">
                <form
                    onSubmit={handleRegistration}>
                    <fieldset className="fieldset">
                        {/* Username Field  */}
                        <label htmlFor="username"
                            className='label'>UserName
                        </label>
                        <input
                            className='input'
                            type="text"
                            placeholder='username'
                            id='username'
                            name='username' />
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
                            id='email'
                            required />
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
                            required />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                {
                    error && (
                        <div className="alert alert-error mt-2 py-2 text-sm">
                            <span>{error}</span>
                        </div>)
                }
                {
                    success && (
                        <div className="alert alert-success mt-2 py-2 text-sm">
                            <span>Account Created Successfully</span>
                        </div>)
                }
                <p>
                    Already Have an Account ? <NavLink to={'/login'} className='text-blue-500
                    hover:text-blue-800'>Login</NavLink>
                </p>
            </div>

        </div>

    );
};

export default Register;
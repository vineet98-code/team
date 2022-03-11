import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Validate from '../utils/Validate';

function Login(props) {

    const [credential, setCredential] = useState({
        email: "username12@gmail.com",
        password: "username12",
        loggedIn: false,
        errors: {
            email: '',
            password: '',
        }
    });

    let { email, password, errors, loggedIn } = credential

    const handleChange = (event) => {
        let { name, value } = event.target;
        Validate(errors, name, value);
        setCredential((user) => {
            return { ...user, [name]: value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let { email, password } = credential;
        if (email === "username12@gmail.com" && password === 'username12') {
            localStorage.setItem("token", "hhhhshahajjkskjbd")
            setCredential({ loggedIn: true })
        }
    };

    if (loggedIn) {
        return <Redirect to='/' />
    }
    return (
        <main>
            <section className="mt-20 px-8">
                <form className="w-full md:w-1/3 mx-auto border border-gray-400 p-6 rounded-md" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <legend className="text-2xl font-bold">Sign In</legend>
                        < Link to="/signup">
                            <span className="text-blue-700 text-lg text-center">Need an account? </span>
                        </Link>
                    </div>
                    <fieldset className="my-3">

                        <span className="text-red-500">{errors.email}</span>
                        <input className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md" type="text" placeholder="Enter Email" value={email} name="email" onChange={handleChange} />

                        <span className="text-red-500">{errors.password}</span>
                        <input className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md" type="text" placeholder="Enter Password" value={password} name="password" onChange={handleChange} />

                        <input type="submit" disabled={errors.email || errors.password} value="Login" className="block w-full my-6 py-2 px-3 bg-blue-500 text-white font-bold cursor-pointer" />

                    </fieldset>
                </form>
            </section>
        </main>
    )

}

export default Login;
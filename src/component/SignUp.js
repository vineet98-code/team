import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Validate from '../utils/Validate';

const SignUp = (props) => {

  const [credential, setCredential] = useState({
    username: 'username12',
    email: "username12@gmail.com",
    password: "username12",
    signup: false,
    errors: {
      email: '',
      password: '',
    }
  });

  let {username, email, password, errors, signup } = credential
  const handleChange = (event) => {
    let { name, value } = event.target;
    Validate(errors, name, value);
    setCredential((user) => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, email, password} = credential;
    if (username === 'username12' && email === "username12@gmail.com" && password === 'username12') {
        setCredential({ signup: true })
        props.history.push('/login');
    }
  };

  return (
    <main>
      <section className="mt-20 px-8">
        <form className="w-full md:w-1/3 mx-auto border border-gray-400 p-6 rounded-md" onSubmit={handleSubmit}>
          <div className="text-center">
            <legend className="text-2xl font-bold">Sign up</legend>
            < Link to="/login">
              <span className="text-blue-700 text-lg text-center">SignIn</span>
            </Link>
          </div>
          <fieldset className="my-3">

            <span className="text-red-500">{errors.username}</span>
            <input className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md" type="text" placeholder="Enter Username" value={username} name="username" onChange={handleChange} />

            <span className="text-red-500">{errors.email}</span>
            <input className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md" type="text" placeholder="Enter Email" value={email} name="email" onChange={handleChange} />

            <span className="text-red-500">{errors.password}</span>
            <input className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md" type="text" placeholder="Enter Password" value={password} name="password" onChange={handleChange} />

            <input type="submit" disabled={errors.email || errors.password || errors.username} value="SignUp" className="block w-full my-6 py-2 px-3 bg-blue-500 text-white font-bold cursor-pointer" />

          </fieldset>
        </form>
      </section>
    </main>
  )
}



export default withRouter(SignUp);
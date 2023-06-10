import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/newproject")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <div className='signupsquare'>
            <h1 style={{ color: 'white', textAlign: 'center' }}> Test Fire Base </h1>
            <form>
                <div style={{ width: 300, display: 'flex', justifyContent: 'space-between', marginBottom:8 }}>
                    <label htmlFor="email-address" style={{ color: 'white', }}>
                        Email address
                    </label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:8 }}>
                    <label htmlFor="password" style={{ color: 'white', }}>
                        Password
                    </label>
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmit}
                    style={{ width: 300, marginTop: 10, height: 50, color: 'white', backgroundColor: 'black', borderRadius:8}}
                >
                    Sign up
                </button>

            </form>

            <p style={{ textAlign: 'center', marginTop: 20, }}>
                Already have an account?{' '}
                <NavLink to="/newproject" className="navlinkstuff">
                    Sign in
                </NavLink>
            </p>
        </div>
    )
}

export default Home;
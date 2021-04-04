import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header';
import axios from 'axios';
function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./');
        }

    }, [])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    const onsubmitHandler = (event) => {
        event.preventDefault();
        let item = { name, password, email }
        const result = axios.post('http://127.0.0.1:8000/api/register', item).then((result) => {
            history.push('/login');
        }).catch((err) => {
            console.warn(err);
            history.push("/register");
        })
    };

    return (
        <>
            <Header />
            <form onSubmit={onsubmitHandler}>
                <div className="col-sm-6 offset-sm-3">

                    <h1>User Sign Up</h1> <br></br >
                    <input type="text" required onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
                    <br></br >
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your Password" />
                    <br></br >
                    <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your Email" />
                    <br></br >
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div >
            </form>
        </>

    )

}
export default Register;
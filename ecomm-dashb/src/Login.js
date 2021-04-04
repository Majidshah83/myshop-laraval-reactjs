import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Login() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./');
        }

    }, [])
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();

    const onsubmitHandler = (event) => {
        event.preventDefault();
        console.warn("password, email" + password + email);
        let item = { email, password };
        axios.post('http://127.0.0.1:8000/api/login', item)
            .then(function (response) {
                console.log(response);
                if (response.data.success == true) {
                    localStorage.setItem("user-info", JSON.stringify(response));
                    history.push("/");
                    // const user = JSON.parse(localStorage.getItem('user-info'));
                }
                else {
                    history.push("/register");
                }
            })
            .catch(function (error) {
                console.log(error);
                // history.push("/register");
            });

    };

    return (
        <>
            <Header />
            <form onSubmit={onsubmitHandler}>
                <div className="col-sm-6 offset-sm-3">
                    <h1 >Login Page</h1>
                    <br></br>
                    <input type="text" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} className="form-control" required />
                    <br></br>
                    <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password" className="form-control" required />
                    <br></br>
                    <button type="submit" className="btn btn-primary">Login</button>

                    {/* {<div >
                        <span style={{ color: "red" }}>{loginError}</span>
                    </div>} */}

                </div>
            </form>
        </>

    )
}
export default Login
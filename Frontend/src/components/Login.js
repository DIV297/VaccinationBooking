import React, { useContext } from 'react'
import dataContext from "../context/dataContext";
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    let history = useNavigate();
    const context = useContext(dataContext);
    const {credentials,setCredentials,loginUser,match,loginAdmin} = context;
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const clickbutoon = () => {
        console.log('clicked button');
        loginUser();
        if(match){
            history("../home", { replace: true });
        }
    }
    const clickbutoonforadmin=()=>{
        loginAdmin();
        if(match){
            history("../home", { replace: true });
        }
    }
  return (
    <>
      <div>
                <h2 style={{'marginTop':'10vh'}}>Login to Vaccination Booking App</h2>
                <form onSubmit={loginUser} style={{
                    'margin':'9vw',
                    'display': 'inline-block',
                    'width': '75vw',
                    'border': '2px solid black', 'padding': '2vh', 'height': '60vh', 'borderRadius':'30px','marginTop': '10vh'
                }}>
                    <div className="form-outline mb-4 my-3">
                        <input type="email" id="email" name="email" className="form-control" onChange={onChange} value={credentials.email} />
                        <label className="form-label" htmlFor="email">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" className="form-control" onChange={onChange} value={credentials.password} />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="form2Example31" onChange={onChange} />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!" onChange={onChange}>Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" onClick={clickbutoon} className="btn btn-primary btn-block mb-4" style={{'marginRight':'20px'}}>Login As User</button>
                    <button type="button" onClick={clickbutoonforadmin} className="btn btn-primary btn-block mb-4">Login As Admin</button>

                </form>
            </div>
    </>
  )
}

export default Login

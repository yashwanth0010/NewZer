import React, { Component } from 'react';
import  {useState}  from 'react';
import '../components/login.css'
//<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
class Login extends Component {
    /*const[test,setTest] = useState("");*/
    render() { 
        
        return (
            <>
                <div id="main" class="d-flex justify-content-center">
                    <div class="box">
                        <div  class="d-flex justify-content-center"><h2>LOGIN</h2></div>
                        <div class="input"><h4>Username : <input type="text"/></h4></div>
                        <div class="input"><h4>Password : <input type="password"/></h4></div>
                        <div class="button"><button type="button">signup</button></div>
                        <div id="forgot"><a href="login.html">forgot password</a></div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Login;
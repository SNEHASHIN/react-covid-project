import React, {useState} from 'react';
import "./LoginForm.css"
function LoginForm() {

    const [popupStyle,showPopup] = useState("hide")

    const popup = ()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"), 3000)
    }

    return (
        <div className='container'>
      <div className="cover">
        <h1>LOGIN</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <button className="login-btn" onClick={popup}>Login</button>

        <div className={popupStyle}>
            <h3>Login Done Successfully</h3>
    
        </div>
      </div>
      </div>
    );
}

export default LoginForm;
import React from "react"
import "./Navigation.css"

const Navigation = () => {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout","_self")
      }

    return(
        <div className="header">
            <span className="title">Book App</span>
            <ul className="list">
                <li className="Profile">
                    {/* <img className="avatar" src="https://dlscenter.com/wp-content/uploads/2017/06/manchester-united-kits-and-logo.jpg" alt="" /> */}
                    {/* <div className="username">Username</div> */}
                </li>
                <li className="logout" onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}

export default Navigation;
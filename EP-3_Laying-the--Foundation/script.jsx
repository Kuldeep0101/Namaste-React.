import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))


const Header = () => {
    return (
    <div className="header">
        <img
            className="logo"
            src="https://w7.pngwing.com/pngs/1003/904/png-transparent-computer-icons-logo-instagram-logo-instagram-logo-miscellaneous-text-symbol-thumbnail.png"
            alt="logo"
        />
        <input
            type="text"
            className="input-box" placeholder="Search..."
        />
        <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            className="user-icon"
            alt="user-icon"
        />
    </div>
    );
};


root.render(<Header />)
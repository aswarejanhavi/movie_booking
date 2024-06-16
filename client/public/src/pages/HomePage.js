// src/pages/HomePage.js
// import React from 'react';

// const HomePage = () => {
//     return (
//         <div>
//             <h1>Home Page</h1>          
//             <h1>Register</h1>
//             <h1>Login</h1>
//         </div>
//     );
// };

// export default HomePage;


import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="overlay">
                <h1>Movie App </h1>
                <div className="links">
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


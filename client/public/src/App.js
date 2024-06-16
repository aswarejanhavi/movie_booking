// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { UserProvider } from './context/UserContext';
// import Register from './pages/Register';
// import Login from './pages/Login';

// const App = () => {
//     return (
//         <UserProvider>
//             <Router>
//                 <div>
//                     <Switch>
//                         <Route path="/register" component={Register} />
//                         <Route path="/login" component={Login} />
//                     </Switch>
//                 </div>
//             </Router>
//         </UserProvider>
//     );
// };

// export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// // import other components and pages as needed

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 {/* <Route path="/" element={<Home />} /> */}
//                 <Route path="/login" element={<Login />} />
//                 <Route path='/Register'element={<Register/>}/>
//                 {/* other routes */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage component
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* other routes */}
            </Routes>
        </Router>
    );
}

export default App;



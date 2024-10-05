// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import CreatePoll from './components/CreatePoll';
// import PollList from './components/PollList';
// import Poll from './components/Poll';
// import Home from './components/Home'; // Import the Home component

// const App = () => {
//     const [token, setToken] = useState(null);

//     // PrivateRoute component to protect certain routes
//     const PrivateRoute = ({ children }) => {
//         return token ? children : <Navigate to="/login" />;
//     };

//     return (
//         <Router>
//             <div>
//                 <h1>Voting App</h1>
//                 <Routes>
//                     <Route path="/" element={<Home />} /> {/* Home Page as default */}
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/login" element={<Login setToken={setToken} />} />
//                     <Route
//                         path="/create-poll"
//                         element={
//                             <PrivateRoute>
//                                 <CreatePoll />
//                             </PrivateRoute>
//                         }
//                     />
//                     <Route path="/polls" element={<PollList />} />
//                     <Route path="/poll/:id" element={<Poll />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;
// src/App.js
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreatePoll from './components/CreatePoll';
import PollList from './components/PollList';
import Poll from './components/Poll';
import Home from './components/Home';

const App = () => {
    const [token, setToken] = useState(null);
    const [polls, setPolls] = useState([]); // State to store polls

    const PrivateRoute = ({ children }) => {
        return token ? children : <Navigate to="/login" />;
    };

    return (
        <Router>
            <div>
                <h1>Voting App</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route
                        path="/create-poll"
                        element={
                            <PrivateRoute>
                                <CreatePoll setPolls={setPolls} polls={polls} /> {/* Pass props */}
                            </PrivateRoute>
                        }
                    />
                    <Route path="/polls" element={<PollList polls={polls} />} />
                    <Route path="/poll/:id" element={<Poll polls={polls} setPolls={setPolls} />} /> {/* Pass props */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

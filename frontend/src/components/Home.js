// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Voting App</h1>
            <p>Register to create and participate in polls!</p>
            <div>
                <Link to="/register">
                    <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Register</button>
                </Link>
                <Link to="/login">
                    <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Login</button>
                </Link>
            </div>
            
        </div>
    );
};

export default Home;

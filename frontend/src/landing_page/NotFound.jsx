import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        flexDirection: 'column',
    };

    const contentStyle = {
        textAlign: 'center',
    };

    const homeButtonStyle = {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    };

    const iconStyle = {
        fontSize: '50px',
        color: '#ff6347',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <FaExclamationTriangle style={iconStyle} />
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" style={homeButtonStyle}>Return to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
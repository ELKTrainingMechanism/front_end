import React from 'react';
// import './css/home.css';
import './../css/navbar.css';

const Home = () => {
   
    return(
    <div>
        <div className="header">
            <h1 className="headline" style={{ fontSize: '20px' }}>gcetm.</h1>
            <div className="linkContainer" style={{ fontSize: '14px' }}>
            <a href="/login" className="link">SIGN IN</a>
            <a href="/doc" className="link">DOC</a>
            </div>
        </div>
        <div className="home" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
            To do: A landing page with all about info here? Go sign in.
        </div>
    </div>
    )
}
 
export default Home;
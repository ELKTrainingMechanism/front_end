import React from 'react';
// import './css/home.css';

import Navbar from './Navbar.js'

const Home = () => {
   
    return(
    <div>
        <Navbar />
        <div className="home" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
            To do: A landing page with all about info here? Go sign in.
        </div>
    </div>
    )
}
 
export default Home;
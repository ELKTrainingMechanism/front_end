import React from 'react';
// import './css/about.css';

import Navbar from './Navbar.js'

const Doc = () => {
   
    return(
    <div>
        <Navbar />
        <div className="doc" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
            To do: A documentation-guide thing for users here?
        </div>
    </div>
    )
}
    
export default Doc;
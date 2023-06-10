import React from 'react';
// import './css/about.css';
import './../css/navbar.css';

const Doc = () => {
   
    return(
    <div>
        <div className="header">
            <h1 className="headline" style={{ fontSize: '20px' }}>gcetm.</h1>
            <div className="linkContainer" style={{ fontSize: '14px' }}>
            <a href="/login" className="link">SIGN IN</a>
            <a href="/doc" className="link">DOC</a>
            </div>
        </div>
        <div className="doc" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
            To do: A documentation-guide thing for users here?
        </div>
    </div>
    )
}
    
export default Doc;
import React from 'react';
import './../css/navbar.css';
import { useAuthValue } from '../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { currentUser } = useAuthValue();

  return (
    <div className="header">
      <div className="left-section">
        <h1 className="headline">kangaroo.</h1>
      </div>
      <div className="right-section">
        <div className="dropdown">
          <FontAwesomeIcon icon={faBars} className="white-icon" />
          <div className="dropdown-content">
            <a href="/">HOME</a>
            <a href="/doc">DOC</a>
            <a href="/train">TRAIN</a>
            <a href="/profile">PROFILE</a>
          </div>
        </div>
        <p className="user-email">{currentUser ? currentUser.email : null}</p>
        {currentUser ? (
          <>
            <img src={currentUser.photoURL} alt="Profile" className="profile-picture" />
            <a href="/" onClick={() => signOut(auth)} className="signout">
              <span className="signout-text">Sign Out</span>
              <FontAwesomeIcon icon={faLongArrowRight} />
            </a>
          </>
        ) : (
            <>
            <a href="/login" className="signin">
              <span className="signin-text">Sign In</span>
              <FontAwesomeIcon icon={faLongArrowRight} />
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

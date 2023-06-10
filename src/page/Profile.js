import React from 'react';
import './../css/profile.css';
import './../css/navbar.css';
import { useAuthValue } from '../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Profile() {
  const { currentUser } = useAuthValue();

  return (
    <div>
      <div className="header">
      <h1 className="headline" style={{ fontSize: '20px' }}>gcetm.</h1>
        <div className="linkContainer" style={{ fontSize: '14px' }}>
          <a href="/" className="link">HOME</a>
          <a href="/doc" className="link">DOC</a>
          <a href="/train" className="link">TRAIN</a>
          <a href="/profile" className="link">PROFILE</a>
          <a href="/" className="link"><span onClick={() => signOut(auth)}>SIGN OUT</span></a>
        </div>
      </div>
      <div className="profile" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        {/* <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p> */}
        <h1>Trained Model Results</h1>
      </div>
    </div>
  );
}

export default Profile;

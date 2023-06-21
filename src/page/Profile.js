import React, { useState, useEffect } from 'react';
import './../css/profile.css';
import { useAuthValue } from '../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import { getDatabase, ref, child, get } from "firebase/database";
import { Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar.js'

function Profile() {
  const { currentUser } = useAuthValue();

  const [userData, setUserData] = useState();

  useEffect(() => {
    const db = getDatabase();
    get(ref(db, `users/${currentUser.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const mapTrainingRuns = (userData) => {
    const objectArray = Object.entries(userData.allTrainingData);
  
    return (
      <div className="container">
      {objectArray.map(([key, value]) => (
        <div className="section" key={key}>
          <h5>[Training Run ID: {key}]</h5>
          <div className="content">
            <div className="parameter-box">
            <h3>Small Model Hyperparameters</h3>
            <div>d_model: {value.d_model}, </div>
            <div>layer_norm_eps: {value.layer_norm_eps}, </div>
            <div>init_range: {value.init_range}, </div>
            <div>d_head: {value.d_head}, </div>
            <div>d_mlp: {value.d_mlp}, </div>
            <div>n_heads: {value.n_heads}, </div>
            <div>n_layers: {value.n_layers}</div>
            </div>
            <div className="parameter-box">
            <h3>Large Model Hyperparameters</h3>
            <div>d_model: {value.d_model2}, </div>
            <div>layer_norm_eps: {value.layer_norm_eps2}, </div>
            <div>init_range: {value.init_range2}, </div>
            <div>d_head: {value.d_head2}, </div>
            <div>d_mlp: {value.d_mlp2}, </div>
            <div>n_heads: {value.n_heads2}, </div>
            <div>n_layers: {value.n_layers2}</div>
            </div>
            <div className="parameter-box">
            <h3>Other Advanced Options</h3>
            <div>dataset: {value.dataset}, </div>
            <div>n_ctx: {value.n_ctx}, </div>
            <div>batch_size: {value.batch_size}, </div>
            <div>num_epochs: {value.num_epochs}, </div>
            <div>max_steps: {value.max_steps}, </div>
            <div>lr: {value.lr}, </div>
            <div>weight_decay: {value.weight_decay}</div>
            </div>
            <div className="parameter-box">
            <h3>Performance Metrics</h3>
            <div>Small model's perplexity: {value.small_perplexity}, </div>
            <div>Scaled-up model's perplexity: {value.scaled_perplexity}, </div>
            <div>Large model's perplexity: {value.large_perplexity}, </div>
            <div>Small model's cross-entropy: {value.small_cross_entropy}, </div>
            <div>Scaled-up model's cross-entropy: {value.scaled_cross_entropy}, </div>
            <div>Large model's cross-entropy: {value.large_cross_entropy}</div>
            <div>Total time taken: {value.runtime}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="profile" style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        {/* <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p> */}
        <h1>Trained Model Results</h1>
        {/* <Button style={{ marginRight: '10px' }} variant="contained" onClick={readUserData}>Load Most Recent</Button> */}
        {
          userData?<p>{mapTrainingRuns(userData)}</p>:null
        }
      </div>
    </div>
  );
}

export default Profile;

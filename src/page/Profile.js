import React, { useState, useEffect } from 'react';
import './../css/profile.css';
import { useAuthValue } from '../AuthContext';

import { getDatabase, ref, get, update, set } from "firebase/database";

import Navbar from './Navbar.js'

function Profile() {
  const { currentUser } = useAuthValue();

  const [userData, setUserData] = useState();

  useEffect(() => {
    const db = getDatabase();

    writeUserData();

    get(ref(db, `users/${currentUser.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [currentUser]);

  function writeUserData() {
    const db = getDatabase();
  
    // Check if UID exists in the database
    const userRef = ref(db, "users/" + currentUser.uid);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // UID already exists, update the user data
          const updateUser = {
            uid: currentUser.uid,
            username: currentUser.displayName,
            email: currentUser.email,
          };
          update(ref(db, "users/" + currentUser.uid), updateUser);
        } else {
          // UID does not exist, create a new user
          const newUser = {
            uid: currentUser.uid,
            username: currentUser.displayName,
            email: currentUser.email,
          };
          set(ref(db, "users/" + currentUser.uid), newUser);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }  

  const mapTrainingRuns = (userData) => {
    const objectArray = Object.entries(userData.allTrainingData).reverse();
  
    return (
      <div className="container">
      {objectArray.map(([key, value], index) => (
        <div className="section" key={key}>
          <h5>[ Training Run Number: {objectArray.length - index}
          {value.small_training_loss === '-'?<> | Running </>: <> | Completed </>}
          | Runtime: {(value.runtime / (1000 * 60)).toFixed(2)} minutes ]</h5>
          <div className="content">
          <div className="parameter-row">
            <div className="parameter-box">
            <h3>Hyperparameters (small)</h3>
            <div>d_model: {value.d_model} </div>
            <div>layer_norm_eps: {value.layer_norm_eps} </div>
            <div>init_range: {value.init_range} </div>
            <div>d_head: {value.d_head} </div>
            <div>d_mlp: {value.d_mlp} </div>
            <div>n_heads: {value.n_heads} </div>
            <div>n_layers: {value.n_layers}</div>
            </div>
            <div className="parameter-box">
            <h3>Hyperparameters (large)</h3>
            <div>d_model: {value.d_model2} </div>
            <div>layer_norm_eps: {value.layer_norm_eps2} </div>
            <div>init_range: {value.init_range2} </div>
            <div>d_head: {value.d_head2} </div>
            <div>d_mlp: {value.d_mlp2} </div>
            <div>n_heads: {value.n_heads2} </div>
            <div>n_layers: {value.n_layers2}</div>
            </div>
            <div className="parameter-box">
            <h3>Other Advanced Options</h3>
            <div>dataset: {value.dataset} </div>
            <div>n_ctx: {value.n_ctx} </div>
            <div>batch_size: {value.batch_size} </div>
            <div>num_epochs: {value.num_epochs} </div>
            <div>max_steps: {value.max_steps} </div>
            <div>lr: {value.lr} </div>
            <div>weight_decay: {value.weight_decay}</div>
            </div>
            </div>
            <div className="parameter-box performance-metrics-box">
            <h3 style={{textAlign: "center"}}>Performance Metrics</h3>
            <div className="column">
              <div>Small model's training loss: {value.small_training_loss} </div>
              <div>Scaled-up model's training loss: {value.scaled_training_loss} </div>
              <div>Large model's training loss: {value.large_training_loss}</div>
            </div>
            <div className="column">
              <div>Small model's validation loss: {value.small_validation_loss} </div>
              <div>Scaled-up model's validation loss: {value.scaled_validation_loss} </div>
              <div>Large model's validation loss: {value.large_validation_loss}</div>
            </div>
            <div className="column">
              <div>Small model's perplexity: {value.small_perplexity} </div>
              <div>Scaled-up model's perplexity: {value.scaled_perplexity} </div>
              <div>Large model's perplexity: {value.large_perplexity} </div>
              </div>
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
        <p><strong>Name: </strong>{currentUser?.displayName}</p>
        <h1>Trained Model Results</h1>
        {
          // console.log(userData) &&
          userData && userData.allTrainingData?<p>{mapTrainingRuns(userData)}</p>:<p>Request a training run and view your run's status here.</p>
        }
      </div>
    </div>
  );
}

export default Profile;

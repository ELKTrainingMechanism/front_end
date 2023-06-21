import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import './../css/CustomModelTrainingArgs.css'; 

import { signOut } from 'firebase/auth' 
import { auth } from './../firebase'

import { getDatabase, ref, set, push, child, update } from "firebase/database";
import { useAuthValue } from '../AuthContext';

import Navbar from './Navbar.js'

function CustomModelTrainingArgs() {

    const { currentUser } = useAuthValue();

    const [csrfToken, setCsrfToken] = useState('');
    const [responseData, setResponseData] = useState('');
    const [bounce, setBounce] = useState('');
    const [customTrainingArgs, setCustomTrainingArgs] = useState({
        "d_model": 768, 
        "layer_norm_eps": 0.00005, 
        "init_range": 0.02, 
        "d_head": 64, 
        "d_mlp": 3072, 
        "n_heads": 12, 
        "n_layers": 12, 
        "d_model2": 768, 
        "layer_norm_eps2": 0.00005, 
        "init_range2": 0.02, 
        "d_head2": 64, 
        "d_mlp2": 3072, 
        "n_heads2": 12, 
        "n_layers2": 12, 
        "dataset": 'wikitext-103-raw-v1',
        "n_ctx": 1024,
        "batch_size": 8, 
        "num_epochs": 1,
        "max_steps": 25000,
        "lr": 0.001,
        "weight_decay": 0.01,
        "gpu_ip": " ", 
        "username": " ", 
        "password": " ",
        "small_perplexity": 0,
        "scaled_perplexity": 0,
        "large_perplexity": 0,
        "small_cross_entropy": 0,
        "scaled_cross_entropy": 0,
        "large_cross_entropy": 0,
        "runtime": 0,
    });

    const handleChange_d_model = (event) => {
        customTrainingArgs['d_model'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_layer_norm_eps = (event) => {
        customTrainingArgs['layer_norm_eps'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_init_range = (event) => {
        customTrainingArgs['init_range'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_head = (event) => {
        customTrainingArgs['d_head'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_mlp = (event) => {
        customTrainingArgs['d_mlp'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_heads = (event) => {
        customTrainingArgs['n_heads'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_layers = (event) => {
        customTrainingArgs['n_layers'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_model2 = (event) => {
        customTrainingArgs['d_model2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_layer_norm_eps2 = (event) => {
        customTrainingArgs['layer_norm_eps2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_init_range2 = (event) => {
        customTrainingArgs['init_range2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_head2 = (event) => {
        customTrainingArgs['d_head2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_mlp2 = (event) => {
        customTrainingArgs['d_mlp2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_heads2 = (event) => {
        customTrainingArgs['n_heads2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_layers2 = (event) => {
        customTrainingArgs['n_layers2'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_dataset = (event) => {
        customTrainingArgs['dataset'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_ctx = (event) => {
        customTrainingArgs['n_ctx'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_batch_size = (event) => {
        customTrainingArgs['batch_size'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_num_epochs = (event) => {
        customTrainingArgs['num_epochs'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_max_steps = (event) => {
        customTrainingArgs['max_steps'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_lr = (event) => {
        customTrainingArgs['lr'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_weight_decay = (event) => {
        customTrainingArgs['weight_decay'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_gpu_ip = (event) => {
        customTrainingArgs['gpu_ip'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_username = (event) => {
        customTrainingArgs['username'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_password = (event) => {
        customTrainingArgs['password'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };

    useEffect(() => {
      // Fetch the CSRF token from the Django backend
      const fetchCsrfToken = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/get_csrf_token/');
          const data = await response.json();
          setCsrfToken(data.csrfToken);
        } catch (error) {
          console.error('Failed to fetch CSRF token:', error);
        }
      };
      fetchCsrfToken();
    }, []);

    function writeUserData(trainingArgs) {
        var today = new Date()
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var datetime = date + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const db = getDatabase();
        // set(ref(db, 'users/' + currentUser.uid), {
        //   uid: currentUser.uid,
        //   username: currentUser.displayName,
        //   email: currentUser.email,
        //   currentlyTraining: true,
        //   currentTrainingArgs: trainingArgs,
        // });

        const updateUser = {
            uid: currentUser.uid,
            username: currentUser.displayName,
            email: currentUser.email,
            currentlyTraining: true,
            currentTrainingArgs: trainingArgs,
          }

        const newUserKey = push(child(ref(db), 'users/')).key;
        var updates = {};
        updates['/users/' + newUserKey] = updateUser;
        update(ref(db), updates);

        const newTrainingRunKey = push(child(ref(db), 'users/')).key;
        updates = {};
        updates['/users/' + currentUser.uid + '/allTrainingData/' + newTrainingRunKey] = trainingArgs;
        update(ref(db), updates);
    }

    const postCustomTrainingArgs = async (event) => {
        event.preventDefault();
        writeUserData(customTrainingArgs);
        try {
          await fetch('http://127.0.0.1:8000/api/post_custom_training_args/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken
            },
            body: JSON.stringify({ customTrainingArgs })
          }).then(response => response.json())
          .then(data => {
              setResponseData(data.message);
              setBounce(data.output);
          })
          .catch(error => {
              console.error(error);
          });
        } catch (error) {
          console.error('Failed to post data:', error);
        }
      };

  return (
    <div>
        <Navbar />
        <Box style={{ padding: '20px', paddingTop: 0, fontSize: '14px' }}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={postCustomTrainingArgs}
            >
            <div>
                <h1>Custom Training Hyperparameters (small-model)</h1>
                <TextField required
                    id="outlined-basic" label="d_model" 
                    value={customTrainingArgs['d_model']} 
                    onChange={handleChange_d_model} 
                />
                <TextField required
                    id="outlined-basic" label="layer_norm_eps" 
                    value={customTrainingArgs['layer_norm_eps']} 
                    onChange={handleChange_layer_norm_eps} 
                />
                <TextField required
                    id="outlined-basic" label="init_range" 
                    value={customTrainingArgs['init_range']} 
                    onChange={handleChange_init_range} 
                />
                <TextField required
                    id="outlined-basic" label="d_head" 
                    value={customTrainingArgs['d_head']} 
                    onChange={handleChange_d_head} 
                />
                <TextField required
                    id="outlined-basic" label="d_mlp" 
                    value={customTrainingArgs['d_mlp']} 
                    onChange={handleChange_d_mlp} 
                />
                <TextField required
                    id="outlined-basic" label="n_heads" 
                    value={customTrainingArgs['n_heads']} 
                    onChange={handleChange_n_heads} 
                />
                <TextField required
                    id="outlined-basic" label="n_layers" 
                    value={customTrainingArgs['n_layers']} 
                    onChange={handleChange_n_layers} 
                />
            </div>
            <div>
                <h1>Custom Training Hyperparameters (large-model)</h1>
                <TextField required
                    id="outlined-basic" label="d_model" 
                    value={customTrainingArgs['d_model2']} 
                    onChange={handleChange_d_model2} 
                />
                <TextField required
                    id="outlined-basic" label="layer_norm_eps" 
                    value={customTrainingArgs['layer_norm_eps2']} 
                    onChange={handleChange_layer_norm_eps2} 
                />
                <TextField required
                    id="outlined-basic" label="init_range" 
                    value={customTrainingArgs['init_range2']} 
                    onChange={handleChange_init_range2} 
                />
                <TextField required
                    id="outlined-basic" label="d_head" 
                    value={customTrainingArgs['d_head2']} 
                    onChange={handleChange_d_head2} 
                />
                <TextField required
                    id="outlined-basic" label="d_mlp" 
                    value={customTrainingArgs['d_mlp2']} 
                    onChange={handleChange_d_mlp2} 
                />
                <TextField required
                    id="outlined-basic" label="n_heads" 
                    value={customTrainingArgs['n_heads2']} 
                    onChange={handleChange_n_heads2} 
                />
                <TextField required
                    id="outlined-basic" label="n_layers" 
                    value={customTrainingArgs['n_layers2']} 
                    onChange={handleChange_n_layers2} 
                />
            </div>
            <div>
                <h1>Other Advanced Options</h1>
                <TextField required
                    id="outlined-basic" label="dataset" 
                    value={customTrainingArgs['dataset']} 
                    onChange={handleChange_dataset} 
                />
                <TextField required
                    id="outlined-basic" label="batch_size" 
                    value={customTrainingArgs['batch_size']} 
                    onChange={handleChange_batch_size} 
                />
                <TextField required
                    id="outlined-basic" label="num_epochs" 
                    value={customTrainingArgs['num_epochs']} 
                    onChange={handleChange_num_epochs} 
                />
                <TextField required
                    id="outlined-basic" label="max_steps" 
                    value={customTrainingArgs['max_steps']} 
                    onChange={handleChange_max_steps} 
                />
                <TextField required
                    id="outlined-basic" label="lr" 
                    value={customTrainingArgs['lr']} 
                    onChange={handleChange_lr} 
                />
                <TextField required
                    id="outlined-basic" label="weight_decay" 
                    value={customTrainingArgs['weight_decay']} 
                    onChange={handleChange_weight_decay} 
                />
                <TextField required
                    id="outlined-basic" label="n_ctx" 
                    value={customTrainingArgs['n_ctx']} 
                    onChange={handleChange_n_ctx} 
                />
            </div>
            <div>
                <h1>Cloud Compute Credentials</h1>
                <TextField required
                id="outlined-basic" label="gpu_ip" 
                value={customTrainingArgs['gpu_ip']} 
                onChange={handleChange_gpu_ip} 
                />
                <TextField required
                    id="outlined-basic" label="username" 
                    value={customTrainingArgs['username']} 
                    onChange={handleChange_username} 
                />
                <TextField required
                    id="outlined-basic" label="password" 
                    value={customTrainingArgs['password']} 
                    onChange={handleChange_password} 
                />
            </div>
            <br/>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ marginRight: '10px' }} variant="contained" type="submit">Begin Training</Button>
            <Button style={{ marginLeft: '10px' }} variant="outlined" onClick={() => window.location.href = './profile'}>View Your Results</Button>
            {/* <Button style={{ marginLeft: '10px' }} variant="outlined" onClick={() => writeUserData(24, "me", "me@mgmail.com", "umwha")}>View Your Results</Button> */}
            </div>
            <p style={{ textAlign: 'center' }}>Response: {responseData}</p>
            <p style={{ textAlign: 'center' }}>Bounce: {bounce}</p>
            </div>
        </Box>
    </div>
  );
 };

export default CustomModelTrainingArgs;
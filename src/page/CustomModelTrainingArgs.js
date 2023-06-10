import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import './../css/CustomModelTrainingArgs.css'; 
import './../css/navbar.css';

import { signOut } from 'firebase/auth' 
import { auth } from './../firebase'

function CustomModelTrainingArgs() {

    const [csrfToken, setCsrfToken] = useState('');
    const [responseData, setResponseData] = useState('');
    const [bounce, setBounce] = useState('');
    const [customTrainingArgs, setCustomTrainingArgs] = useState({"d_model": 768, "debug": true, "layer_norm_eps": 0.00005, "d_vocab": 50257, "init_range": 0.02, "n_ctx": 1024, "d_head": 64, "d_mlp": 3072, "n_heads": 12, "n_layers": 12, "gpu_ip": " ", "username": " ", "password": " "});

    const handleChange_d_model = (event) => {
        customTrainingArgs['d_model'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_debug = (event) => {
        customTrainingArgs['debug'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_layer_norm_eps = (event) => {
        customTrainingArgs['layer_norm_eps'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_d_vocab = (event) => {
        customTrainingArgs['d_vocab'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_init_range = (event) => {
        customTrainingArgs['init_range'] = event.target.value
        setCustomTrainingArgs({...customTrainingArgs})
    };
    const handleChange_n_ctx = (event) => {
        customTrainingArgs['n_ctx'] = event.target.value
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

    const postCustomTrainingArgs = async (event) => {
        event.preventDefault();
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
                <h1>Custom Training Hyperparameters</h1>
                <TextField required
                    id="outlined-basic" label="d_model" 
                    value={customTrainingArgs['d_model']} 
                    onChange={handleChange_d_model} 
                />
                <TextField required
                    id="outlined-basic" label="debug" 
                    value={customTrainingArgs['debug']} 
                    onChange={handleChange_debug} 
                />
                <TextField required
                    id="outlined-basic" label="layer_norm_eps" 
                    value={customTrainingArgs['layer_norm_eps']} 
                    onChange={handleChange_layer_norm_eps} 
                />
                <TextField required
                    id="outlined-basic" label="d_vocab" 
                    value={customTrainingArgs['d_vocab']} 
                    onChange={handleChange_d_vocab} 
                />
                <TextField required
                    id="outlined-basic" label="init_range" 
                    value={customTrainingArgs['init_range']} 
                    onChange={handleChange_init_range} 
                />
                <TextField required
                    id="outlined-basic" label="n_ctx" 
                    value={customTrainingArgs['n_ctx']} 
                    onChange={handleChange_n_ctx} 
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
            </div>
            <p style={{ textAlign: 'center' }}>Response: {responseData}</p>
            <p style={{ textAlign: 'center' }}>Bounce: {bounce}</p>
            </div>
        </Box>
    </div>
  );
 };

export default CustomModelTrainingArgs;
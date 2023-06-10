// import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Desktop5 () {
  // const [attnheads, setAttention] = useState("");
  //   const [embeddings, setEmbeddings] = useState("");
  //   const [decoders, setDecoders] = useState("");
  //   const [size, setBatchsize] = useState("");

  // const parameters = (event) => {
  //   setAttention(event.target.value);
  //   setEmbeddings(event.target.value);
  //   setDecoders(event.target.value);
  //   setBatchsize(event.target.value);
  // }
    const headerStyle = {
        background: '#f0f0f0',
        padding: '20px',
      };
      
      const headlineStyle = {
        margin: '0',
      };
      
      const linkContainerStyle = {
        display: 'flex',
      };
      
      const linkStyle = {
        marginRight: '10px',
        textDecoration: 'none',
        color: '#333',
      };
      
      const contentStyle = {
        marginTop: '20px',
        // Add any other styles for the content area
      }

     
  return (
    <div>
      <div style={headerStyle}>
        <h1 style={headlineStyle}>GCETM</h1>
        <div style={linkContainerStyle}>
          <a href="/about" style={linkStyle}>ABOUT</a>
          <a href="/scaleups" style={linkStyle}>SCALE UPS</a>
          <a href="/profile" style={linkStyle}>PROFILE</a>
        </div>
      </div>
      <div style={contentStyle}>
        {
            <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                <h1>CLOUD COMPUTE - CREDENTIALS</h1>
        <TextField
          required
          id="outlined-basic"
          label="GPU ID"
        />
        <TextField
          required
          id="outlined-basic"
          label="USERNAME"
        />
        <TextField
          required
          id="outlined-basic"
          label="DOMAIN"
        />
        <TextField
          required
          id="outlined-basic"
          label="INITIALIZATION FOLDER"
        />
        </div>
        <div>
                <h1>DATASET DETAILS</h1>
        <TextField
          required
          id="outlined-basic"
          label="LINK"
        />
        <TextField
          required
          id="outlined-basic"
          label="DIRECTORY PATH"
        />
        <TextField
          required
          id="outlined-basic"
          label="ITERATIONS TO SPLIT AND SCALE UP AT"
        />
        </div>
            </Box>
        }
      </div>
      <div className="btn-group">
        <button
        className = "btn"
        onClick={() => window.location.href = './desktop4'}>
        Edit Parameters</button>
      <button
        className = "btn"
        // onClick={parameters}
        >
        Start Running
        </button>
      </div>
</div>
  );
 };

export default Desktop5;
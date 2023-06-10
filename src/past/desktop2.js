import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material/';
import { useNavigate } from 'react-router-dom';

function Desktop2() {
    const navigate = useNavigate();

    const [attnheads, setAttention] = useState("");
    const [embeddings, setEmbeddings] = useState("");
    const [decoders, setDecoders] = useState("");
    const [size, setBatchsize] = useState("");

    const handleChange = (event) => {
        setAttention(event.target.value);
        setEmbeddings(event.target.value);
        setDecoders(event.target.value);
        setBatchsize(event.target.value);

        navigate("/oldproject");
    
    }


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
                            <h1>SMALLER MODEL - HYPERPARAMETERS</h1>
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF ATTENTION HEADS"
                                value={attnheads}
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF EMBEDDINGS"
                                value={embeddings}
                                onChange={handleChange}

                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF DECODERS"
                                value={decoders}
                                onChange={handleChange}

                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="BATCH SIZE"
                                value={size}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <h1>LARGER MODEL - HYPERPARAMETERS</h1>
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF ATTENTION HEADS"
                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF EMBEDDINGS"
                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="NUMBER OF DECODERS"
                            />
                            <TextField
                                required
                                id="outlined-basic"
                                label="BATCH SIZE"
                            />
                        </div>
                    </Box>
                }
            </div>
            <div className="btn-group">
                <button
                    className="btn"
                    onClick={() => setAttention("")}>
                    Reset Parameters</button>
                <button
                    className="btn"
                    onClick={handleChange}>
                    Cloud Compute
                </button>
            </div>
        </div>
    );
};

export default Desktop2;

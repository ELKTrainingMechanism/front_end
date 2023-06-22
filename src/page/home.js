import React from 'react';
import './../css/home.css';
import Img1 from './../trial_config.jpg';
import Img2 from './../trial_results.jpg';
import Navbar from './Navbar.js';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <div className="home-container">
          <h1 className="main-heading">
            A General-Purpose Compute Efficient Training Methodology for Compute-Optimal Large Language Models
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
                style={{
                    color: 'black',
                    backgroundColor: 'white',
                    padding: '10px 20px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    borderRadius: '30px',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                }}
                variant="contained"
                onClick={() => (window.location.href = './train')}
                >
                Train a Model
                </Button>
            </div>
          </div>
        </div>
        <div className="home-extra">
          <section id="about">
            <h2>About the Project</h2>
            <p>
              Our project aims to revolutionize the training of large generative language models with a focus on AI alignment.
              By leveraging smaller models to initialize larger ones, we reduce the cost and resources required for training
              while ensuring alignment with human values. Our open-source framework empowers AI researchers to experiment with
              this methodology and contribute to the field of AI alignment research.
            </p>
          </section>

          <h2>Base Results</h2>
          <p>We tested out our methodology on GPT2-models of the below configurations to get the compute-metrics you see here.</p>
          <img src={Img1}></img>
          <img src={Img2}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

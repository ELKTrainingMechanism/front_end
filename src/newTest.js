import React, { useEffect, useState } from 'react';

const Teste = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState('');
    const [bounce, setBounce] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
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

  const postData = async (event) => {
    event.preventDefault();

    try {
      // Perform a POST request to the Django backend
      await fetch('http://127.0.0.1:8000/api/post-data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken // Include the CSRF token in the headers
        },
        body: JSON.stringify({ inputValue })
      }).then(response => response.json())
      .then(data => {
          // Handle response from Django backend
          setResponseData(data.message);
          setBounce(data.inputData);
      })
      .catch(error => {
          // Handle error
          console.error(error);
      });
    } catch (error) {
      console.error('Failed to post data:', error);
    }
  };

  return (
    <div style={{color:'white',backgroundColor:'rebeccapurple',width:300,marginLeft:500,marginTop:100,borderRadius:10,padding:20}}>
        <form onSubmit={postData}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
            <p>Response: {responseData}</p>
            <p>Bounce: {bounce}</p>
        </form>
    </div>
);
};

export default Teste;

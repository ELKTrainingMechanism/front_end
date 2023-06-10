// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FirstAPI = () => {
//     const [quote, setQuote] = useState('');

//     useEffect(() => {
//         const options = {
//             headers: {
//                 'X-RapidAPI-Key': '0fb5d33acfmsh96f9daaf31b8861p1ed9cajsn3688aaae001e',
//                 'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
//             },
//             params: {
//                 category: 'all',
//                 count: '1'
//             }
//         };
//         axios.get('https://famous-quotes4.p.rapidapi.com/random', options)
//             .then(response => {
//                 if (response.data && response.data[0]) {
//                     setQuote(response.data[0].text);
//                 } else {
//                     console.log('No quote found in response');
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Random Quote:</h1>
//             <div>
//                 <h1>{quote}</h1>
//             </div>
//         </div>
//     );
// }

// export default FirstAPI;


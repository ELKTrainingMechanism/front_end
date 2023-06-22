import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './page/Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import {Navigate} from 'react-router-dom'

import Home from './page/home';
import Doc from './page/Doc';
import CustomModelTrainingArgs from './page/CustomModelTrainingArgs';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <Home />
          }/>
          {/* <Route path='/doc' element={
            <Doc />
          }/> */}
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/profile' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/profile' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
          <Route path="/profile" element={
            <PrivateRoute>
            <Profile/>
            </PrivateRoute>
          } />
          <Route path="/train" element={
            <CustomModelTrainingArgs/>
          } />
        </Routes>  
      </AuthProvider>
  </Router>
  );
}

export default App;

// import './App.css';
// // import Test from './Test.js';
// import Fire from './fire';


// function App() {
//   return (
//     <div className="App">
//      <Fire/>
//     </div>
//   );
// }

// export default App;

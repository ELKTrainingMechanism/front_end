import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './page/home';
import About from './page/about';
import Desktop2 from './page/desktop2';
// import FirstAPI from './page/firstapi';
import Desktop5 from './page/desktop5';
import Teste from './newTest';

function Fire() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Teste/>} />
                    <Route path="/login" element={<About />} />
                    <Route path="/newproject" element={<Desktop2/>} />
                    <Route path="/oldproject" element={<Desktop5/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Fire;
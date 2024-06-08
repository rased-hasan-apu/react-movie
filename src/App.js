import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About.jsx';
import Example from './Components/Pages/Share/Exapmle/Example.js';

function App() {
  return (
    <div >
      <Router>
          <Example/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
        </Router>  
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar/index1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App1 from './App1';
import Home from './home';



ReactDOM.render(
    <React.StrictMode>  
 <Router> 
    <NavBar/>
    <Routes>
    <Route path="/*" element= {<Home /> } />
        <Route path="App/*" element= {<App /> } />
        <Route path="App1/*" element= {<App1 /> } />
      

      </Routes>
    
  </Router>          


</React.StrictMode>,
document.getElementById('root')
);


serviceWorker.unregister();

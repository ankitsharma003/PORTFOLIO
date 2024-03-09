import './App.css';
import Sidenavbar from './components/SideNavbar/Sidenavbar';
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/about/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidenavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
//import BookList from './Booklist'
import Destination from './Destination'
import Home from './Home';
import About from './About';
 import Contact from './Contact';
import Naving from './Naving';
import RegistrationForm from './RegistrationForm';
//import SubmittedForm from './SubmittedForm';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
<Naving/>
{/*<SubmittedForm/>*/}
<Routes>
<Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/registrationform" element={<RegistrationForm/>} />
          {/*<Route path="/submittedform" element={<SubmittedForm/>} />*/}
          
</Routes>
    </div>
  </BrowserRouter>


   
  );
};

export default App;

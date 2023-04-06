import React from 'react';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';

import Destination from './Destination'
import Home from './Home';
import About from './About';
 import Contact from './Contact';
import Naving from './Naving';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
   <div className="App">
    <BrowserRouter>
<Routes>
 
           <Route path="/" element={<Naving />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/registrationform" element={<RegistrationForm/>} />
          
</Routes>
</BrowserRouter>
</div>
   
  );
};

export default App;

import React from 'react';
import Landing from './pages/Landing';
import { Routes,Route } from 'react-router-dom';
import NewAd from './pages/NewAdTab';

const App = () => {
  return (
 <Routes>


<Route path='/'  element={<Landing/>}/>

<Route path='/add' element={<NewAd/>}/>

</Routes>
  );
}

export default App;


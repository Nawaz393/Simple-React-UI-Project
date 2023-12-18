import React from 'react';
import Landing from './pages/Landing';
import { Routes,Route } from 'react-router-dom';
import NewAd from './pages/NewAdTab';
import HelpAndDocumentation from './pages/HelpAndDocumentation';

const App = () => {
  return (
 <Routes>


<Route path='/'  element={<Landing/>}/>

<Route path='/add' element={<NewAd/>}/>
<Route path='/help' element={<HelpAndDocumentation/>}/>

</Routes>
  );
}

export default App;


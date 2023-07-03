import React from 'react';
import Recipe from './Components/Recipe';
import './Components/Recipe.css';

import { Route,Routes} from 'react-router-dom';

function App(){
  return(
    
    <Routes>
      <Route path="/" element={<Recipe/>}/>
      
    </Routes>
    
    
    
  );
}
export default App;

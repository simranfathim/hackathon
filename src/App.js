
import './App.css';
import Cricket from './Cricket';
import Home from './components/Home';
import Menu from './components/Menu';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"
  
   >
      <Menu/>
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/Home' element={<Home/>}/>
      <Route path ='/Cricket' element={<Cricket/>}/>
      
      
    </Routes>
    </div>
  );
}

export default App;

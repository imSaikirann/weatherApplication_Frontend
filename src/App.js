import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

import { BrowserRouter,Route,Routes} from 'react-router-dom'

import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
        
      </Routes>
  
      </BrowserRouter>
    

    </div>
  );
}

export default App;

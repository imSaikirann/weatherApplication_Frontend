import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Search></Search>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Search from './pages/Search';
import DayForcast from './pages/DayForcast';
import SevenDayForcast from './pages/SevenDayForcast';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Search></Search>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        
      </Routes>
      <DayForcast/>
      <SevenDayForcast/>
      </BrowserRouter>
    

    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import DayForcast from './pages/DayForcast'
import SevenDayForcast from './pages/SevenDayForcast'



import Search from './pages/Search';

function App() {
  return (
    <div className="App">
    
        <Navbar />
        <Search />
        <Home/>
        <DayForcast />
        <SevenDayForcast />



    </div>
  );
}

export default App;

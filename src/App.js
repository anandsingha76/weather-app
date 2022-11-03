
import Nav from './components/Nav';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Convertor from './components/Convertor';
import WeatherForecast from './components/WeatherForecast';


import './App.css';


function App() {
  return (
    <div>
    <Nav/>
     {/* <Home/> */}
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/weatherforecast' element={<WeatherForecast/>}></Route>
      <Route path='/convertor' element={<Convertor/>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;

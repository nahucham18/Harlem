import './App.css';


import Header from './components/Header/Header'
import Burgas from './views/Burgas/Burgas'
import Home from './views/Home/Home'
import Menu from './views/Menu/Menu'
import Footer from './components/Footer/Footer'
import { Routes, Route} from 'react-router-dom'

function App() {
    

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/menu/burgas' element={<Burgas/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

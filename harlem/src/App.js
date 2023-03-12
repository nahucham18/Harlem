import './App.css';


import Burgas from './components/Burgas/Burgas'
import Home from './views/Home/Home'
import Menu from './views/Menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route} from 'react-router-dom'

function App() {
    

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
      <Burgas/>
    </div>
  );
}

export default App;

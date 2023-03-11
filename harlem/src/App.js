import './App.css';
import Cerrado from './components/Cerrado/Cerrado'
import Abierto from './components/Abierto/Abierto';
import Burgas from './components/Burgas/Burgas'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route , useNavigate} from 'react-router-dom'

function App() {
  let dia = new Date()
  let hora = dia.getHours()
    const navigate = useNavigate()
    

  return (
    <div className="App">
      <Header/>
      <Routes>
      {
        (hora >= 19 && hora <24)
        ?<Route path='/' element={<Abierto/>}/>
        :<Route path='/' element={<Cerrado/>}/>
      }
      <Route path='/menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
      <Burgas/>
    </div>
  );
}

export default App;

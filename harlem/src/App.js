import './App.css';
import Cerrado from './components/Cerrado/Cerrado'
import Abierto from './components/Abierto/Abierto';
import { Routes, Route} from 'react-router-dom'

function App() {
  let dia = new Date()
  let hora = dia.getHours()
  return (
    <div className="App">
      {
        (hora >= 0 && hora <24)
        ?<Abierto/>
        :<Cerrado/>
      }

    </div>
  );
}

export default App;

import './App.css';
import Cerrado from './components/Cerrado/Cerrado'
import Abierto from './components/Abierto/Abierto';

function App() {
  let dia = new Date()
  console.log(dia);
  let hora = dia.getHours()
  console.log(dia.getHours());
  return (
    <div className="App">
      {
        (hora >= 19 && hora <24)
        ?<Abierto/>
        :<Cerrado/>
      }

    </div>
  );
}

export default App;

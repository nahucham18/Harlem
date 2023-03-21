import { useNavigate } from 'react-router-dom'

import style from './Home.module.css'

import Abierto from '../../components/Abierto/Abierto'
import Cerrado from '../../components/Cerrado/Cerrado'

const Home = () =>{

    let dia = new Date()
    let hora = dia.getHours()
    

        return (
        <div>
            {
                hora > 20 
                ?<Abierto/>
                :<Cerrado/>
            }
        </div>
    )
}

export default Home
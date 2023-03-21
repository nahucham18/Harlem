import Menu from "../../views/Menu/Menu"
import Promociones from "../Promociones/Promociones"
import EstadoPedido from "../EstadoPedido/EstadoPedido"
import style from './Abierto.module.css'
import { Link } from 'react-router-dom'


const Abierto = ()=>{
    return (
        <div className={style.container}>
            
           
            <div className={style.container_home}></div>
            <img src="" alt="" />
            <Link to={`/menu`}>
                <Menu />
            </Link>
            <Promociones/>
            <EstadoPedido/>
        </div>
    )
}

export default Abierto
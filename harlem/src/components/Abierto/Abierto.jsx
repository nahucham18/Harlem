import Menu from "../Menu/Menu"
import Promociones from "../Promociones/Promociones"
import EstadoPedido from "../EstadoPedido/EstadoPedido"
import style from './Abierto.module.css'


const Abierto = ()=>{
    return (
        <div className={style.container}>
            
            <img className={style.logo} src='https://menu.harlemburgas.com.ar/assets/img/logo.png?v=2' alt='harlem'/>
            <hr />
            <div className={style.container_home}></div>
            <img src="" alt="" />
            <Menu />
            <Promociones/>
            <EstadoPedido/>
        </div>
    )
}

export default Abierto
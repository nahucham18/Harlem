import style from './Options.module.css'
import { Link } from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {RiShoppingCart2Line} from 'react-icons/ri'

const Options = () =>{
    return (
        <div className={style.container} >
            <div className={style.divOptions}>
                <Link className={style.enlace} to={`/menu`}>
                    <div className={style.option}>
                        <button className={style.btn} ><FaHamburger/></button>
                        <h2 className={style.section}>NUESTRO MENÚ</h2>
                    </div>
                </Link>
                
            
                    <Link className={style.enlace} to={`https://menu.harlemburgas.com.ar/info_zonas.php`}>
                        <div className={style.option}>
                            <button className={style.btn} ><ImLocation2/></button>
                            <h2 className={style.section}>ZONAS DE ENTREGA</h2>
                        </div>
                    </Link>
            
                    <Link className={style.enlace} to={`/pedido`}>
                        <div className={style.option}>
                            <button className={style.btn} ><RiShoppingCart2Line/></button>
                            <h2 className={style.section}>PEDIDO RÁPIDO</h2>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default Options;
import style from './Status.module.css'
import { Link } from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'

const Status = () =>{
    return (
        <div className={style.container}>
            <h2 className={style.section}>ESTAMOS CERRADOS</h2>
            <p className={style.sub_section}>Nuesto horario de atención es: Miércoles a Domingos de 20:30 a23:30</p>
            <hr />
           <div className={style.option}>
             <h2 className={style.section}>NUESTRO MENÚ</h2>
             <Link className={style.enlace} to={`/menu`}>
                 <button className={style.btn} ><FaHamburger/></button>
             </Link>
           </div>
            

            <div className={style.option}>
                <h2 className={style.section}>ZONAS DE ENTREGA</h2>
                <Link to={`https://menu.harlemburgas.com.ar/info_zonas.php`}>
                    <button className={style.btn} ><ImLocation2/></button>
                </Link>
            </div>

        </div>
    )
}

export default Status
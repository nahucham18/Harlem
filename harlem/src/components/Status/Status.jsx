import style from './Status.module.css'
import { Link } from 'react-router-dom'

const Status = () =>{
    return (
        <div className={style.container}>
            <h2 className={style.section}>ESTAMOS CERRADOS</h2>
            <p className={style.sub_section}>Nuesto horario de atención es: Miércoles a Domingos de 20:30 a23:30</p>
            <hr />
            <h2 className={style.section}>NUESTRO MENÚ</h2>
            <Link className={style.enlace} to={`/menu`}>
                <button className={style.btn} >Ver</button>
            </Link>
            <hr />
            <h2 className={style.section}>ZONAS DE ENTREGA</h2>
            <Link to={`https://menu.harlemburgas.com.ar/info_zonas.php`}>
                <button className={style.btn} >Ver</button>
            </Link>
        </div>
    )
}

export default Status
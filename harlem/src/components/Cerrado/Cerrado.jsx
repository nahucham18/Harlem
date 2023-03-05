import Status from '../Status/Status'
import style from './Cerrado.module.css'

const Cerrado = () =>{
    return (
        <div className={style.container}>
            <img className={style.logo} src='https://menu.harlemburgas.com.ar/assets/img/logo.png?v=2' alt='harlem'/>
            <hr />
            <div className={style.container_home}></div>
            <Status/>
        </div>
    )
}

export default Cerrado
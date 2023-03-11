import Status from '../Status/Status'
import style from './Cerrado.module.css'
import { Link } from 'react-router-dom'

const Cerrado = () =>{
    return (
        <div className={style.container}>
            
            <div className={style.container_home}></div>
            <Status/>
        </div>
    )
}

export default Cerrado
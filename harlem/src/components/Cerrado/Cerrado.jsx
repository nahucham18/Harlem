import Status from '../Status/Status'
import style from './Cerrado.module.css'
import Header from '../Header/Header'
import Options from '../Options/Options'
import { Link } from 'react-router-dom'

const Cerrado = () =>{
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.container_home}></div>
            <Options/>
        </div>
    )
}

export default Cerrado
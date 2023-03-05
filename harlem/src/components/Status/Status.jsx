import style from './Status.module.css'

const Status = () =>{
    return (
        <div className={style.container}>
            <h2>ESTAMOS CERRADOS</h2>
            <p>Nuesto horario de atención es: Miércoles a Domingos de 20:30 a23:30</p>
            <hr />
            <h2>NUESTRO MENÚ</h2>
            <button className={style.btn} >Ver</button>
            <hr />
            <h2>ZONAS DE ENTREGA</h2>
            <button className={style.btn} >Ver</button>
        </div>
    )
}

export default Status
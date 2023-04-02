import style from './Status.module.css'


const Status = () =>{
    return (
        <div className={style.container}>
            <div className={style.divStatus}>
                <h3 className={style.status}>CERRADO</h3>
                <p className={style.sub_section}>Horario de atención: Mié a Dom de 20hs a 23:30hs</p>
            </div>
        </div>
    )
}

export default Status
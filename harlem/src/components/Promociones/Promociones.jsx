import style from './Promociones.module.css'

const Promociones = () =>{
    return (
        <div className={style.container}>
            <div className={style.divPromociones}>
                <h2 className={style.title}>PROMOCIONES</h2>
                <p>Mira las promocione que tenemos para vos!</p>
            </div>
        </div>
    )
}

export default Promociones
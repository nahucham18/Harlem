

import style from './Burga.module.css'

const Burga = (props) =>{
    return (
        <div className={style.container}>
            <div className={style.right}>
                <h2 className={style.name}>{props.name}</h2>
                <p className={style.ingredientes}>{props.ingredientes}</p>
                <h2 className={style.price}>{props.price}</h2>
            </div>
            <img className={style.image} src={props.image} alt={props.name} />
        </div>
    )
}
export default Burga
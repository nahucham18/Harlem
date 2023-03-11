import style from './Burga.module.css'

const Burga = (props) =>{
    return (
        <div className={style.container}>
            <h2>{props.name}</h2>
            <p>{props.ingredientes}</p>
            <h2>{props.price}</h2>
            <img src={props.image} alt={props.name} />
        </div>
    )
}
export default Burga
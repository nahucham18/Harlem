import style from './MenuOption.module.css'
import { Link } from 'react-router-dom'


const MenuOption = ({option, description, id}) =>{ 
    
    

    return (
        <div className={style.container}>
            <h2 className={style.option}>{option}</h2>
            <p className={style.description}>{description}</p>
            <Link to={
                    option === 'BURGAS'
                    ? 'burgas' : option === 'PAPAS' ? 'papas' : 'ensalda'
                    } className={style.link} >Pedir</Link>
        </div>
    )
}

export default MenuOption
import style from './MenuOption.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MenuOption = ({option, description, id}) =>{ 
    
    
    const handlerclick = (event) =>{
        
    
    }

    return (
        <div className={style.container}>
            <h2 className={style.option}>{option}</h2>
            <p className={style.description}>{description}</p>
            <Link onClick={handlerclick} className={style.link} >Pedir</Link>
        </div>
    )
}

export default MenuOption
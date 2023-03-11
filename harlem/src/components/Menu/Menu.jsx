import MenuOption from '../MenuOption/MenuOption'
import dataMenuOption from '../MenuOption/dataMenuOption'
import style from './Menu.module.css'


const Menu = () =>{
    return (
        <div className={style.container}>
            <h2>MENÚ</h2>
            {
                dataMenuOption.map((option)=>{
                    return(
                        <MenuOption 
                                id={option.id}
                                option={option.option}
                                description={option.description}
                                    />
                    )
                })
            }
        </div>
    )
}

export default Menu
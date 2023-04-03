import MenuOption from '../../components/MenuOption/MenuOption'
import dataMenuOption from '../../components/MenuOption/dataMenuOption'
import style from './Menu.module.css'


const Menu = () =>{
    return (
        <div className={style.container}>

            <h2 className={style.title}>MENÚ</h2>
            <div className={style.divOptions}>
            {
                dataMenuOption.map((option)=>{
                    return(
                        <MenuOption 
                                key={option.id}
                                id={option.id}
                                option={option.option}
                                description={option.description}
                                    />
                )})
            }
            </div>
        </div>
    )
}

export default Menu
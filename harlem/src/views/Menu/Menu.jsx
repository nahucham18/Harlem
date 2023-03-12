import MenuOption from '../../components/MenuOption/MenuOption'
import dataMenuOption from '../../components/MenuOption/dataMenuOption'
import style from './Menu.module.css'


const Menu = () =>{
    return (
        <div className={style.container}>
            <h2>MENÚ</h2>
            {
                dataMenuOption.map((option)=>{
                    return(
                        <MenuOption 
                                key={option.id}
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
import { Link } from 'react-router-dom'

import data from '../../data'
import Burga from '../../components/Burga/Burga'
import style from './Burgas.module.css'

const Burgas = () => {
    return (
        <div>
            <div className={style.divMenu}>
                <p className={style.menu}>MENU</p>
                <Link to={`/menu`}>VOLVER</Link>
            </div>
            {
                data.map( (burgar) => {
                    return(
                        <Burga
                            key={burgar.id}
                            name={burgar.name}
                            ingredientes={burgar.ingredientes}
                            price={burgar.price}
                            image={burgar.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Burgas
import data from '../../data'
import Burga from '../Burga/Burga'

const Burgas = () => {
    return (
        <div>
            {
                data.map( burgar => {
                    <Burga
                        name={burgar.name}
                        ingrdientes={burgar.ingredientes}
                        price={burgar.price}
                        image={burgar.image}
                    />
                })
            }
        </div>
    )
}

export default Burgas
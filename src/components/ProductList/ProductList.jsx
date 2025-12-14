// Components
import ProductCard from '../ProductCard/ProductCard.jsx';

// Styles
import style from './ProductList.module.css';



export default function ProductList({ loading, array, start, limit }) {
    return <div className={style.container}>
        {
            !array?.length > 1? <p>No hay productos</p>
            : loading? <span>Cargando...</span>
            : array.slice(start, limit).map(
                (prod, index) => <ProductCard key={index} {...prod} />
            )
        }
    </div>
}
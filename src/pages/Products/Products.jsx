import { useContext } from 'react';

// Contexts
import { ProductsContext } from '../../context/Products.jsx';

// Components
import ProductPagination from '../../components/ProductPagination/ProductPagination.jsx';
import ProductFilter from '../../components/ProductFilter/ProductFilter.jsx';
import ProductList from '../../components/ProductList/ProductList.jsx';

// Styles
import style from './Products.module.css';




export default function Products() {
    const { render, loading, start, limit } = useContext(ProductsContext);

    return <section className={style.container}>
        <div className={style.container_actions}>
            <ProductFilter />
            <ProductPagination />
        </div>

        <ProductList
            loading={loading}
            array={render}
            start={start}
            limit={limit}
        />
    </section>
}
import { useContext } from 'react';

// Contexts
import { ProductsContext } from '../../context/Products';

// Components
import Button from '../ui/Button/Button.jsx';

// Styles
import style from './ProductPagination.module.css';
import Span from '../ui/Span/Span.jsx';




export default function Pagination() {
    const { render, limit, page, loading, handlePrevPage, handleNextPage } = useContext(ProductsContext);
    return <div className={style.container}>
        <Button
            disabled={loading || page === 1}
            func={handlePrevPage}
            text={'Back'}
        />
        <Span text={page}/>
        <Button
            disabled={loading || limit === render.length || render.length < limit}
            func={handleNextPage}
            text={'Next'}
        />
    </div>
}


// 50 / 10 = y
// 50 / 10 = 5
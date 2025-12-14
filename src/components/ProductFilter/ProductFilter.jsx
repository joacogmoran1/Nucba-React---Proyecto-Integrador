import { useContext } from 'react';

// Contexts
import { ProductsContext } from '../../context/Products';

// Components
import Select from '../ui/Select/Select';


export default function ProductFilter() {
    const { categories, handleFilter } = useContext(ProductsContext);
    return <Select
        arrayOfOptions={categories}
        func={handleFilter}
    />
}
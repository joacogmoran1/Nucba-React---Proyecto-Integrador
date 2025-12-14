import { createContext, useEffect, useState } from "react";

// Data
import data from '../db/products.js';



export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [render, setRender] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);

    const getCategories = () => {
        const prodsCategories = data.map((product) => product.category);
        const categories = [...new Set(prodsCategories)];
        setCategories(categories);
    }

    const handlePrevPage = () => {
        if (start > 1) {
            setLoading(true);
            setPage(page-1);
            setStart(start-10);
            setLimit(limit-10);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

    const handleNextPage = () => {
        if (limit < render.length) {
            setLoading(true);
            setPage(page+1);
            setStart(start+10);
            setLimit(limit+10);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

    const handleFilter = ({ target }) => {
        setLoading(true);
        if (target.value === 'all') setRender(products);
        else {
            const filteredProds = products.filter((prods) => prods.category === target.value);
            setRender(filteredProds);
        }
        setTimeout(() => {
            setPage(1);
            setStart(0);
            setLimit(10);
            setLoading(false);
        }, 1000);
    }

    useEffect(
        () => {
            setProducts(data);
            setRender(data);
            getCategories();
        }, []
    );

    return <ProductsContext.Provider value={{
        products, render, categories, loading, page, start, limit,
        handleFilter, handlePrevPage, handleNextPage
    }}>
        { children }
    </ProductsContext.Provider>
}
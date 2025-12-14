import { useContext } from 'react';

// Contexts
import { CartContext } from '../../context/Cart';

// Components
import ProductCartCard from '../ProductCartCard/ProductCartCard.jsx';


// Styles
import style from './CartList.module.css';




export default function CartList() {
    const { cart } = useContext(CartContext);

    return !cart?.length? <p>No hay productos en el carrito</p>
    : cart.map(
        (prod, index) => <ProductCartCard key={index} {...prod} />
    )
}
import { useContext } from "react";
import { useNavigate } from "react-router";

// Contexts
import { ProductsContext } from "../../context/Products";

// Components
import ProductList from "../../components/ProductList/ProductList";
import Hero from "../../components/ui/Hero/Hero";
import Section from "../../components/ui/Section/Section";
import Button from "../../components/ui/Button/Button";

// Style
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    textAlign: 'center'
}



export default function Home() {
    const { render, loading } = useContext(ProductsContext);
    const navigate = useNavigate();
    return (
        <>
            <Hero
                func={() => navigate('/wines')}
                image={`https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                button={'Ver Catalogo'}
                title={'Vinos de calidad!'}
                text={`
                    Seleccionamos etiquetas únicas para que cada
                    momento tenga su botella perfecta.
                `}
            />

            <Section
                func={() => navigate('/about')}
                image={'https://images.pexels.com/photos/34926023/pexels-photo-34926023.jpeg'}
                text={`
                    En Wine Club creemos que el vino es mucho más que una bebida:
                    es cultura, encuentro y emoción. Nacimos con una misión clara:
                    acercar a cada persona la botella perfecta para cada momento,
                    de forma simple, confiable y con una experiencia de compra que
                    se sienta tan especial como descorchar un gran vino.
                `}
                btn={'Conocer Mas!'}
            />
            

            <div style={containerStyle}>
                <ProductList
                    loading={loading} array={render}
                    start={0} limit={4}
                />
                <Button func={() => navigate('/wines')} text={'Ver Catalogo'} />
            </div>
            
            <Section
                func={() => navigate('/about')}
                image={'https://images.unsplash.com/photo-1541971897566-308cf7ad0934?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                text={`
                    Nos inspira acompañar momentos: una celebración, una cena con amigos,
                    un regalo especial o simplemente el placer de descubrir un vino nuevo.
                    Queremos que cada botella que llegue a tus manos tenga una historia para
                    contar, y que vos seas parte de ella.
                `}
                btn={'Conocer Mas!'}
            />
        </>
    )
}
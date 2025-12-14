
// Components
import { useNavigate } from 'react-router';
import Hero from '../../components/ui/Hero/Hero';
import Section from '../../components/ui/Section/Section';

// Styles
const container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
}

export default function About() {
    const navigate = useNavigate();
    return <div style={container}>
        <Hero
            image={'https://images.unsplash.com/photo-1535869462434-f92cc30bf40c?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            func={() => navigate('/wines')}
            button={'Ver Catalogo'}
        />
        <Section
            func={() => navigate('/about')}
            image={'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            text={`
                En Wine Club creemos que el vino es mucho más que una bebida: es cultura, encuentro
                y emoción. Nacimos con una misión clara: acercar a cada persona la botella perfecta
                para cada momento, de forma simple, confiable y con una experiencia de compra que se
                sienta tan especial como descorchar un gran vino.
            `}
            btn={'Conocer Mas!'}
            show={false}
        />
        <Section
            func={() => navigate('/about')}
            image={'https://images.unsplash.com/photo-1541971897566-308cf7ad0934?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            text={`
                Seleccionar y ofrecer vinos de calidad - desde etiquetas boutique hasta clásicos
                reconocidos - para que tanto aficionados como expertos encuentren exactamente lo
                que buscan, sin complicaciones y con información clara.
            `}
            btn={'Conocer Mas!'}
            show={false}
            reverse={true}
        />
        <Section
            func={() => navigate('/about')}
            image={'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            text={`
                Trabajamos directamente con bodegas, productores y distribuidores para garantizar
                autenticidad, frescura y un catálogo cuidadosamente elegido. Cada vino que ofrecemos
                fue probado, investigado o recomendado por sommeliers y especialistas que forman parte
                de nuestro equipo.
            `}
            btn={'Conocer Mas!'}
            show={false}
        />
        <Section
            func={() => navigate('/about')}
            image={'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            text={`
                Nos inspira acompañar momentos: una celebración, una cena con amigos, un regalo especial
                o simplemente el placer de descubrir un vino nuevo. Queremos que cada botella que llegue
                a tus manos tenga una historia para contar… y que vos seas parte de ella.
            `}
            btn={'Conocer Mas!'}
            show={false}
            reverse={true}
        />
    </div>
}
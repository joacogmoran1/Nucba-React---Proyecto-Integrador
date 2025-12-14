
// Components
import Button from '../Button/Button';
import Span from '../Span/Span';

// Styles
import style from './Hero.module.css';


export default function Hero({ image='', title='', text='', func, button='' }) {
    return (
        <section className={style.hero} style={{backgroundImage: `url(${image})`}}>
            <div className={style.hero_overlay}></div>
            <div className={style.hero_content}>
                <h1 className={style.hero_content_title}>{title}</h1>
                <Span text={text} />
                <Button
                    className={style.hero_content_button}
                    func={func}
                    text={button}
                />
            </div>
        </section>
    )
}
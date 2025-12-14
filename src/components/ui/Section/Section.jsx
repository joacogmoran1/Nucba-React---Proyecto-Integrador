
// Components
import Button from '../Button/Button';
import Span from '../Span/Span';

// Styles
import style from './Section.module.css';
const row = { flexDirection: 'row' }
const rowReverse = { flexDirection: 'row-reverse' }



export default function Section({ image, text, btn, func, show=true, reverse=false }) {
    return (
        <section style={!reverse? row : rowReverse} className={style.content_section}>
            <div className={style.content_section_image}>
                <img src={image} alt="wine" loading='lazy' />
            </div>
            <div className={style.content_section_content}>
                <div className={style.content_section_content_container}>
                    <Span text={text} />
                    {
                        show? <Button text={btn} func={func} />
                        : null
                    }
                </div>
            </div>
        </section>
    )
}
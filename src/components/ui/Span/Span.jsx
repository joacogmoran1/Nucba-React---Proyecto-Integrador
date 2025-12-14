


const spanStyle = {
    textAlign: 'center',
    lineHeight: '27px',
    fontSize: '17px',
    color: '#fff'
}

export default function Span({ text }) {
    return <span style={spanStyle}>
        {text}
    </span>
}
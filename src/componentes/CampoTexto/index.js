import './campoTexto.css'

const CampoTexto = (props) => {

    const onDigit = (evento) => {
        props.onUpdate(evento.target.value)
    }    

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onDigit} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto
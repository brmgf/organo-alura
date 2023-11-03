import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Salvando formulário')
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para adicionar o colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem..." />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>            
                <Botao>Adicionar</Botao>
            </form>
        </section>
    )
}

export default Formulario
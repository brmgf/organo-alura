import { useState } from 'react'
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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para adicionar o colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    onUpdate={valor => setNome(valor)} />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    onUpdate={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..." 
                    onUpdate={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    onUpdate={valor => setTime(valor)}/>            
                <Botao>Adicionar</Botao>
            </form>
        </section>
    )
}

export default Formulario
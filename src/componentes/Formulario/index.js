import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCoisaCadastrada({
            nome,
            descricao,
            imagem,
            categoria
        })
        setNome('')
        setDescricao('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar uma coisa favorita</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Digite uma descrição curta" 
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria" 
                    itens={props.categoria}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
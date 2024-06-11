import Coisa from '../Coisa'
import './Categoria.css'

const Categoria = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.coisa.length > 0) ? <section className='categoria' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='coisas'>
                {props.coisa.map( coisa => <Coisa corDeFundo={props.corPrimaria} key={coisa.nome} nome={coisa.nome} descricao={coisa.descricao} imagem={coisa.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Categoria
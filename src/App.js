import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {

  const categorias = [
    {
      nome: 'Jogos',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Filmes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Séries',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Comidas',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Pessoas',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Músicas',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Livros',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [coisas, setCoisas] = useState([])

  const aoNovaCoisaAdicionada = (coisa) => {
    debugger
    setCoisas([...coisas, coisa])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario categoria={categorias.map(categoria => categoria.nome)} aoCoisaCadastrada={coisa => aoNovaCoisaAdicionada(coisa)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria} 
        coisa={coisas.filter(coisa => coisa.categoria === categoria.nome)}
      />)}   

    </div>
  );
}

export default App;

import './main.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';

function App() {
  const [livros, setLivros] = useState([]);
  const formik = useFormik({
    initialValues: {
      nomeLivro:"",
      nomeAutor: "",
      ano:0
    },
    onSubmit: (values) => {
      console.log(values)
      const data = {
        id: uuidv4(),
        nomeLivro: values.nomeLivro,
        nomeAutor: values.nomeAutor,
        ano: values.ano
      }
      setLivros(state => [...state, data])

    }
  })
  
  //const [nomeLivro, setNomeLivro] = useState("")
  //const [nomeAutor, setNomeAutor] = useState("")
  //const [ano, setAno] = useState(0)
  //const [livros, setLivros] = useState([]);
  
 // const handleSaveBook = (e) => {
       //e.preventDefault()
       //const data = {
       // id: uuidv4(),
       // nomeLivro,
        //nomeAutor,
        //ano
     // }
      //setLivros(state => [...state, data])
  //}

  return (

    <div className="register-container">
      <div className="content">
        <section>
        <h1>Cadastro de Livros</h1>
            <p>Faça seu cadastro, entre na nossa plataforma!</p>
            <div className='scrollable-tbody'>
            <table>
            <thead>
              <tr>
                <th>Nome do Livro </th>
                <th>Nome do Autor </th>
                <th>Ano de Publicação </th>
              </tr>
            </thead>
            <tbody>
            {livros.map((elemento) => (
              <tr>
                <td>{elemento.nomeLivro}</td>
                <td>{elemento.nomeAutor}</td>
                <td>{elemento.ano}</td>
              </tr>
            ))}
            </tbody>
            </table>
            </div>
          </section>
        <section>
          <form onSubmit={formik.onSubmit}>
      <input 
                name="nomeLivro"
                placeholder="Nome do Livro"
                value={formik.values.nomeLivro}
                onChange={formik.handleChange}
                />
           
      <input 
                name="nomeAutor"
                placeholder="Nome do Autor"
                value={formik.values.nomeAutor}
                onChange={formik.handleChange}
                />

      <input 
                name="Ano"
                placeholder="Ano de Publicação"
                value={formik.values.ano}
                onChange={formik.handleChange}
                />

      <button className="button" type="submit">Cadastrar</button>
      </form>
        </section>
      </div>
    </div>
  );
}

export default App;

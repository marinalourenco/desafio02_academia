import './main.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nomeLivro: Yup.string()
    .min(2, 'muito curto')
    .max(50, 'muito longo')
    .required('requerido'),
  nomeAutor: Yup.string()
    .min(2, 'muito curto')
    .max(50, 'muito longo')
    .required('requerido'),
  anoPublicao: Yup.string()
    .min(2, 'muito curto')
    .max(5, 'muito longo')
    .required('requerido'),
});

function App() {
  const [livros, setLivros] = useState([]);
  const formik = useFormik({
    initialValues: {
      nomeLivro:"",
      nomeAutor: "",
      anoPublicao:"",
    },
    validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      const data = {
        id: uuidv4(),
        nomeLivro: values.nomeLivro,
        nomeAutor: values.nomeAutor,
        anoPublicao: values.anoPublicao,
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
                <td>{elemento.anoPublicao}</td>
              </tr>
            ))}
            </tbody>
            </table>
            </div>
          </section>
        <section>
          <form onSubmit={formik.handleSubmit}>
        <input 
          id="nomeLivro"
          name="nomeLivro"
          placeholder="Nome do Livro"
          value={formik.values.nomeLivro}
          onChange={formik.handleChange}
        />
          {formik.errors.nomeLivro && formik.touched.nomeLivro 
          ? <div className="error">{formik.errors.nomeLivro}</div> 
          : null}
        <input 
          id="nomeAutor"
          name="nomeAutor"
          placeholder="Nome do Autor"
          value={formik.values.nomeAutor}
          onChange={formik.handleChange}
        />
          {formik.errors.nomeAutor && formik.touched.nomeAutor 
          ? <div className="error">{formik.errors.nomeAutor}</div> 
          : null}
        <input 
          id="anoPublicao"
          name="anoPublicao"
          placeholder="Ano de Publição"
          value={formik.values.anoPublicao}
          onChange={formik.handleChange}
        />
        {formik.errors.anoPublicao && formik.touched.anoPublicao 
        ? <div className="error">{formik.errors.anoPublicao}</div> 
        : null}
      <button className="button" type="submit">Cadastrar</button>
      </form>
        </section>
      </div>
    </div>
  );
}

export default App;

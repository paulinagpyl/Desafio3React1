import './App.css';
import { useState } from 'react';
import Formulario from  './components/Formulario';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Alert from './components/Alert';
import {db} from './db';

function App() {
  const [data, setData] = useState(db)

  return (
    <>
    <h1>Lista de colaboradores</h1>
    <Buscador/>
    <div className='row row-cols-2 justify-content-end' >
      <Listado data={data}/>
      <Formulario/>
      <Alert/>
    </div>
    </>
  )
}

export default App

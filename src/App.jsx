import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Alert from './components/Alert';
import { db } from './db';

const App = () =>  {
  const [data, setData] = useState(db)
  const [dataFilter, setDataFilter] = useState(data)

  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false
  })

  const addAlert = (newAlert) => {
    setAlert(newAlert);

    setTimeout(() => {
      setAlert({
        texto: '',
        tipo: '',
        estado: false
      });
    }, 4000);
  };


  return (
    <>
      <h1  style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', margin:'0px', backgroundColor:'#e0e0e0' }} > Lista de colaboradores</h1>
      <Buscador
        data={data}
        dataFilter={setDataFilter}
      />
      <div className='row row-cols-2 justify-content-end' >
        <Listado
          data={data}
          setData={setData}
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
        />
        <Formulario
          className="formulario"
          addAlert={addAlert}
          data={data}
          setData={setData}
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
        />
        <Alert
          className="alert"
          alerta={alert}
        />
      </div>
    </>
  )
}

export default App

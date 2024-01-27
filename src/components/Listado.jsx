import Table from "react-bootstrap/Table";

const Listado = ({ dataFilter, setDataFilter, data, setData }) => {

  const borrarColaborador = (id) => {
    const newData = [...data].filter((colaborador) => colaborador.id !== id);
    setData(newData);

    const newDataFilter = [...dataFilter].filter(
      (colaborador) => colaborador.id !== id
    );
    setDataFilter(newDataFilter);
  }
  const colaboradores = dataFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <i className="fas fa-trash-alt" onClick={() => borrarColaborador(colaborador.id)}></i>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
      <Table variant="dark" className="table table-striped ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{colaboradores}</tbody>
      </Table>
    </div>
  );
};

export default Listado;

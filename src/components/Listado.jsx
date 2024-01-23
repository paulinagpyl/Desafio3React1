import Table from 'react-bootstrap/Table';

const Listado =({data}) =>{
    const colaboradores = data.map((colaborador) =>(
        <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
                <i className="fas fa-trash-alt"></i>

            </td>

        </tr>
    )
    );

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
    <Table striped bordered hover variant="dark">
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

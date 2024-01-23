const Buscador = ({ data, dataFilter }) => {

  const inputHandle = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (colaborador) =>
        colaborador.nombre.includes(buscarPalabra) ||
        colaborador.correo.toLowerCase().includes(buscarPalabra) ||
        colaborador.edad.toLowerCase().includes(buscarPalabra) ||
        colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
        colaborador.telefono.includes(buscarPalabra)
    );

    dataFilter(resultado);
  };

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
        onChange={inputHandle}
      />
    </div>
  );
};

export default Buscador;

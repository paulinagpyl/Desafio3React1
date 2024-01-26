import { useState, useEffect } from "react";

const Formulario = ({ data, setData, dataFilter, setDataFilter, addAlert }) => {
  //inicializa lo que recibe
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const inputHandle = (e) => {
    if (e.target.id === 'inputNombre') {
      setDatosColaborador({ ...datosColaborador, nombre: e.target.value });
    }

    if (e.target.id === 'inputCorreo') {
      setDatosColaborador({ ...datosColaborador, correo: e.target.value });
    }

    if (e.target.id === 'inputEdad') {
      setDatosColaborador({ ...datosColaborador, edad: e.target.value });
    }
    if (e.target.id === 'inputCargo') {
      setDatosColaborador({ ...datosColaborador, cargo: e.target.value });
    }
    if (e.target.id === 'inputTelefono') {
      setDatosColaborador({ ...datosColaborador, telefono: e.target.value });
    }
  }

  const validarDatos = (e) => {
    e.preventDefault();
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{11}$/;

    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      !correoRegex.test(datosColaborador.correo) ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === "" ||
      !telefonoRegex.test(datosColaborador.telefono)
    ) {
      addAlert({
        texto: 'Debes completar todos los campos',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!correoRegex.test(datosColaborador.correo)) {
      addAlert({
        texto: 'Correo electrónico no válido',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!telefonoRegex.test(datosColaborador.telefono)) {
      addAlert({
        texto: 'El teléfono debe tener 11 dígitos',
        tipo: 'alert-danger',
        estado: true,
      });
    } else {
      addAlert({
        texto: 'Colaborador Agregado Exitosamente',
        tipo: 'alert-success',
        estado: true,
      });
      const newId = data.length
        ? (parseInt(data[data.length - 1].id) + 1).toString()
        : '0';

      setData([...data, { ...datosColaborador, id: newId }]);
      setDataFilter([...dataFilter, { ...datosColaborador, id: newId }]);

      setDatosColaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
      });
    }
  }

  useEffect(() => {
    setDatosColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  }, [data]);

  return (
    <div className="formulario col-12 col-lg-4">
      <h3>Agregar Colaborador</h3>

      <form noValidate onSubmit={(e) => validarDatos(e)}>
        <div className="mb-3">
          <input
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.nombre}
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.correo}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email del colaborador"
            pattern=".*"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.edad}
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del colaborador"
          />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
}

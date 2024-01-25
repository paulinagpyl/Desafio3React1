import { useState } from "react";

const Formulario = ({ data, SetData, dataFilter, setDataFilter, addAlert }) => {
  //inicializa lo que recibe
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputs = (e) => {
    const inputsId = {
      inputNombre: "nombre",
      inputCorreo: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTelefono: "telefono",
    };

    const prop = inputsId[e.target.id];
    if (prop) {
      setDatosColaborador({ ...datosColaborador, [prop]: e.target.value });
    }
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;
    //falta expresiones regulares para telefono y email
    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      !correoRegex.test(datosColaborador.correo) ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === "" ||
      !telefonoRegex.test(datosColaborador.telefono)
    ) {
      addAlert({})
    } else if (datosColaborador.telefono.length !== 10) {
      addAlert({})
    } else {
      const nuevoColaborador = { ...datosColaborador };
      SetData([...data, nuevoColaborador]);
      setDatosColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
    //setData
    //setDataFilter
    //setDatosColaborador
  };
  /*
    DatosValidar
      ? setError({
          error: true,
          msg: "Debes completar todos los datos",
          color: "warning",
        })
      : setError({
          error: false,
          msg: "Login creado exitosamente",
          color: "success",
        });
    if (validarPass) {
      setError({
        error: false,
        msg: "Las password no coinciden, prueba nuevamente",
        color: "danger",
      });
      return;
    }


  };
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
*/
  return (
    <form className="formulario" onSubmit={(e) => validarDatos(e)}>
      <div className="form-group">
        <br />
        <input
          id="inputNombre"
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          onChange={handleInputs}
          value={datosColaborador.nombre}
        />
      </div>{" "}
      <div className="form-group">
        <br />
        <input
          id="inputCorreo"
          type="email"
          name="email"
          className="form-control"
          placeholder="micorreo@ejemplo.com"
          onChange={handleInputs}
          value={datosColaborador.correo}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          id="inputEdad"
          type="number"
          name="edad"
          className="form-control"
          placeholder="Edad"
          onChange={handleInputs}
          value={datosColaborador.edad}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          id="inputCargo"
          type="text"
          name="cargo"
          className="form-control"
          placeholder="Cargo del colaborador"
          onChange={handleInputs}
          value={datosColaborador.cargo}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          id="inputTelefono"
          type="number"
          name="telefono"
          className="form-control"
          placeholder="Teléfono del colaborador"
          onChange={handleInputs}
          value={datosColaborador.telefono}
        />
      </div>
      <br />
      <button
        type="submit"
        className="btn btn-primary fullWidth"
      //onClick={AddColaborador}
      >
        Agregar Colaborador
      </button>
      <br />
    </form>
  );
};

export default Formulario;

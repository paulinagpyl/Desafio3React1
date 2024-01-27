import { useState, useEffect } from "react";

const Formulario = ({ addAlert, setData, data, setDataFilter, dataFilter }) => {
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  //función que agrega lo ingresa en inputs
  const addData = (event) => {
    event.preventDefault();
    if (!validarDatos(event)){
      const newId = Math.max(...data.map((colaborador) => parseInt(colaborador.id, 10))) + 1;
      setData([...data, { ...datosColaborador, id: newId }]);
      setDataFilter([ ...dataFilter, { ...datosColaborador, id:newId}])
      addAlert({
        texto: "Colaborador Agregado Exitosamente",
        tipo: "alert-success",
        estado: true,
      })
    }
  };
  
 // función que muestra lo que escribo en el card de nuevo colaborador
  const inputHandle = (e) => {
    if (e.target.id === "inputNombre") {setDatosColaborador({ ...datosColaborador, nombre: e.target.value });}
    if (e.target.id === "inputCorreo") {setDatosColaborador({ ...datosColaborador, correo: e.target.value });}
    if (e.target.id === "inputEdad") {setDatosColaborador({ ...datosColaborador, edad: e.target.value }); }
    if (e.target.id === "inputCargo") {setDatosColaborador({ ...datosColaborador, cargo: e.target.value });}
    if (e.target.id === "inputTelefono") {setDatosColaborador({ ...datosColaborador, telefono: e.target.value });}
  };

  const validarDatos = () => {
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telefonoRegex = /^\d{11}$/;
    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      //!correoRegex.test(datosColaborador.correo) ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === "" // ||
      //!telefonoRegex.test(datosColaborador.telefono)
    ) {
      addAlert({
        texto: "Debes completar todos los campos",
        tipo: "alert-danger",
        estado: true,
      });
      return true
    } else if (!correoRegex.test(datosColaborador.correo)) {
      addAlert({
        texto: "Correo electrónico no válido",
        tipo: "alert-danger",
        estado: true,
      });
      setDatosColaborador({nombre: "", correo: "", edad: "", cargo: "", telefono: "", })
      return true
    } else if (!telefonoRegex.test(datosColaborador.telefono)) {
      addAlert({
        texto: "El teléfono debe tener 11 dígitos",
        tipo: "alert-danger",
        estado: true,
      });
      setDatosColaborador({nombre: "", correo: "", edad: "", cargo: "", telefono: "", })
      return true
    } else {return false} //fin opciones de los if
  };

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
    <div className="formulario col-12 col-lg-4" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#e0e0e0' }}>
      <h3 style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', margin:'0px', backgroundColor:'#c0c0c0' }}>Agregar Colaborador</h3>

      <form noValidate onSubmit={addData}>
        <div className="mb-3" >
        <input style={{ width:'80%' }}
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.nombre}
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="mb-3">
        <input style={{ width:'80%' }}
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.correo}
            type="email"
            className="form-control"
            id="inputCorreo"
            placeholder="Email del colaborador"
            pattern=".*"
          />
        </div>
        <div className="mb-3">
        <input style={{ width:'80%' }}
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.edad}
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="mb-3">
        <input style={{ width:'80%' }}

            onChange={(e) => inputHandle(e)}
            value={datosColaborador.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="mb-3">
        <input style={{ width:'80%' }}
            onChange={(e) => inputHandle(e)}
            value={datosColaborador.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del colaborador, mínimo 11 dígitos"
          />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', margin:'8px' }}>
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

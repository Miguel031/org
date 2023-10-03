import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarfoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio")
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar);

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador/a.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <CampoTexto 
                titulo="Foto"   
                placeholder="Ingresar enlace de Foto" 
                required
                valor={foto}
                actualizarValor={actualizarfoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton texto="Crear Colaborador"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formulario para crear el colaborador/a.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingresar Color en Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                
                />
            <Boton texto="Crear Equipo"/>
        </form>
    </section>
}

export default Formulario;
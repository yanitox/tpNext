import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className='titulo'>
        <h1 className="kali">ADMINISTRADOR DE PACIENTES</h1>
      </div>
      <div className="kali">
      <div className='columnaForm'>
          <Subtitulo texto={"CREAR MI CITA"} />
          <Formulario agregarCita={agregarCita} />
          </div>
      </div>
    </main>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier Muñoz | Frontend Developer</title>
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Hola, soy Javier 👋</h1>
        <p>
          Frontend Developer especializado en diseño de componentes y desarrollo
          UI.
        </p>

        <h2>📁 Mis proyectos</h2>
        <ul>
          <li>
            <a href="https://github.com/javier-munoz-rodelgo">
              Landing de proyectos
            </a>
          </li>
          <li>
            <a href="https://github.com/javier-munoz-rodelgo">
              Guía técnica personal
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

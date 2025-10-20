import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Javier Muñoz | Frontend Developer</title>
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Vaya... parece que por aquí no hay nada</h1>
      </main>
    </>
  );
}

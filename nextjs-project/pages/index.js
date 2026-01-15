import Head from 'next/head';
import ImpostorLandingV2 from '../components/ImpostorLandingV2';

export default function Home() {
  return (
    <>
      <Head>
        <title>O Impostor Dentro de Você - Ebook Vivo</title>
        <meta name="description" content="Descubra a voz que sabota sua vida — e faça ela calar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImpostorLandingV2 />
    </>
  );
}

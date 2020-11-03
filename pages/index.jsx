import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout.jsx'), {ssr: false});
const CardListProducts = dynamic(
  () => import('../components/CardListProducts.jsx'),
  {ssr: false}
);
import {Suspense} from 'react';

export default function Home() {
  return (
    <Layout
      title='Tienda online de artículos para yoga | PARAYOGA.LIFE'
      description='Tienda online de artículos y regalos de yoga.'
    >
      <div className='container'>
        <h1 className='text-center mt-4 mb-3 h1-title'>
          Tienda online de artículos para yoga
        </h1>
        <p className='text-left p-intro'>
          Brindo por ti 🥂. Si crees que llegaste aquí de casualidad, te digo yo
          que no, no lo fue. Viniste buscando algo, algo importante ... algo que
          realmente haga cambiar tu vida para siempre. Eres alguien especial y
          lo sabes, no necesitas que te lo diga, pero{' '}
          <b>Eres especial, Créelo. </b>
          Tanto tu como yo queremos hacer algo grande en nuestras vidas. Pero
          ... "siempre hay un maldito pero", la realidad es que no sabemos muy
          bien por donde comenzar, asumámoslo, perdemos el rumbo muy temprano, y
          más importante aún, nuestra meta, aquella que vislumbramos una última
          vez antes de cerrar los ojos en la noche cuando dejamos nuestra mente
          en blanco y quien sabe donde, por caminos que desconocemos. Y ...
          sabes que olvidamos, que lo más valioso e importante es{' '}
          <b>el aquí y el ahora</b>. ¿Estás de acuerdo conmigo?
        </p>
        <p className='text-left p-intro'>
          Es acá donde entra el Yoga, y toda la mística que hay a su alrededor.
          Magia o no, la realidad es que puede ayudarnos a encontrar nuevamente
          el foco, y reconducir nuestra vida a ese sueño que queremos alcanzar.{' '}
          <b>PARAYOGA.LIFE</b> es exactamento eso. Buena vibra, buenos consejos,
          y una tienda llena de artículos que pueden ayudarte a recuperar ese
          camino que una vez empezaste y quedó atrás, con la práctica continuada
          del yoga. <b>Disfrútalo.</b>
        </p>
        <Suspense fallback={<div>loading</div>}>
          {' '}
          <CardListProducts />
        </Suspense>
      </div>
    </Layout>
  );
}

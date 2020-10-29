import CardListProducts from '../components/CardListProducts.jsx';
import Layout from '../components/Layout.jsx';

export default function Home() {
  return (
    <Layout
      title='Tienda online de artículos para yoga | PARAYOGA.LIFE'
      description='Meta description content goes here.'
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
          ... "siempre hay un pero", la realidad es que no sabemos muy bien por
          donde comenzar, asumámoslo, perdemos el rumbo muy temprano, y más
          importante aún, nuestra meta, aquella que vislumbramos una última vez
          al cerrar nuestros ojos en la noche oscura. Olvidamos que lo más
          valioso es <b>el aquí y el ahora</b>. Es acá donde entra el Yoga, y
          toda la mística que hay a su alrededor. Magia o no, la realidad es que
          puede ayudarnos a encontrar nuevamente el foco, y reconducir nuestra
          vida a ese sueño que queremos alcanzar. <b>PARAYOGA.LIFE</b> es
          exactamento eso. Buena vibra, buenos consejos, y una tienda llena de
          artículos que pueden ayudarte a recuperar ese camino que una vez
          empezaste y quedó atrás.
        </p>
        <CardListProducts />
      </div>
    </Layout>
  );
}

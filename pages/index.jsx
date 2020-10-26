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
          Sus extremos redondeados la convierten en una gran opción para
          otorgarle modernidad y creatividad a tus contenidos. Es geométrica y
          de amplio espaciado. Aunque es recomendada para textos grandes, es muy
          legible, por lo que también puedes utilizarla para diferentes tipos de
          párrafos. Puedes combinarla con la tipografía EB Garamond para mejores
          resultados.
        </p>
        <CardListProducts />
      </div>
    </Layout>
  );
}

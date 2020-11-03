import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../../components/Layout.jsx'), {
  ssr: false,
});
const StructureBlog = dynamic(
  () => import('../../components/pageBlog/StructureBlog.jsx'),
  {ssr: false}
);

export default function Blog() {
  return (
    <Layout
      title='Descubre las mejores ideas y consejos para yoga | PARAYOGA.LIFE'
      description='Blog para amantes del yoga. Buena vibra, buenos consejos, y una tienda llena de artículos para practicar yoga hoy'
    >
      <div className='container'>
        <div className='row mt-4 mb-3'>
          <Suspense>
            <StructureBlog
              url='/blog/musica-yoga'
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604332186/PARAYOGA.LIFE/young-woman-sitting-yoga-meditation-lotus-pose-listening-music-girl-character-relaxing-headphones-illustration-white-background_118421-591_vqc7p5.webp'
              alt='Mujer joven escuchando musica mientras hace yoga'
              title='Música Yoga'
              description='Cambia tu frecuentcia, súbele a la música, y deja la tristeza
                  y el estrés atrás. Descubramos juntos que esconde la música
                  para yoga.'
              date='2020-10-29'
            />
          </Suspense>
        </div>
      </div>
      <style jsx>{`
        .card {
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
}

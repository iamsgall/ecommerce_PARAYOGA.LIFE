import React from 'react';
import Layout from '../../components/Layout.jsx';

import StructureBlog from '../../components/pageBlog/StructureBlog.jsx';

export default function Blog() {
  return (
    <Layout
      title='Descubre las mejores ideas y consejos para yoga | PARAYOGA.LIFE'
      description='Blog para amantes del yoga. Buena vibra, buenos consejos, y una tienda llena de artículos para practicar yoga hoy'
    >
      <div className='container'>
        <div className='row mt-4 mb-3'>
          <StructureBlog
            url='/blog/musica-yoga'
            image='https://image.freepik.com/free-vector/young-woman-sitting-yoga-meditation-lotus-pose-listening-music-girl-character-relaxing-headphones-illustration-white-background_118421-591.jpg'
            alt='young-woman-sitting-yoga-meditation-lotus-pose-listening-music-girl-character-relaxing-headphones-illustration-white-background'
            title='Música Yoga'
            description='Cambia tu frecuentcia, súbele a la música, y deja la tristeza
                y el estrés atrás. Descubramos juntos que esconde la música
                para yoga.'
            date='2020-10-29'
          />
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

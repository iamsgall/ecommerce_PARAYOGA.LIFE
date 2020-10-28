import React from 'react';
import Aceite from '../components/homeProduct/Aceite.jsx';
import Layout from '../components/Layout.jsx';
import EsterillasProducts from '../components/pageProducts/EsterillasProducts.jsx';

export default function EsterillaParaYoga() {
  return (
    <Layout title='Esterillas para Yoga | PARAYOGA.LIFE'>
      <div className='container'>
        <header className='d-flex justify-content-center mt-4 mb-3'>
          <h1 className='h1-title'>Esterillas para yoga</h1>
        </header>
        <p className='p-intro'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quis
          totam debitis consequuntur quas vel labore error laudantium ad
          incidunt sed at reiciendis consequatur? Aspernatur pariatur quo,
          voluptatibus omnis similique blanditiis nam esse cupiditate beatae
          obcaecati alias natus praesentium officiis dicta ducimus id, amet,
          vitae sequi. Officiis minima iusto dolores?
        </p>
        <div className='row'>
          <EsterillasProducts
            invisible={true}
            image='esterilla'
            title='Esterilla dos en uno banda ancha'
            previous_price='19.99'
            current_price='27.99'
          />
          <EsterillasProducts
            invisible={false}
            image='esterilla'
            title='Lorem ipsum'
            previous_price='19.99'
            current_price='17.99'
          />
        </div>
        <section className='reasons my-5'>
          <h2 className='vertical-line h2-title '>
            Por qué comprar esterilla para yoga
          </h2>
          <p className='p-intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odit
            ullam veniam consectetur impedit error quo. Tempore iusto rem,
            consequatur iste eveniet itaque repellat minus neque illo,
            voluptatum consectetur ea.\
          </p>
          <p className='p-intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odit
            ullam veniam consectetur impedit error quo. Tempore iusto rem,
            consequatur iste eveniet itaque repellat minus neque illo,
            voluptatum consectetur ea.\
          </p>
          <p className='p-intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odit
            ullam veniam consectetur impedit error quo. Tempore iusto rem,
            consequatur iste eveniet itaque repellat minus neque illo,
            voluptatum consectetur ea.\
          </p>
        </section>
        <section className='other-products my-5'>
          <h3 className='vertical-line h2-title'>
            Además de esterillas para yoga, en nuestra tienda tenemos:
          </h3>
          <Aceite />
        </section>
      </div>
    </Layout>
  );
}

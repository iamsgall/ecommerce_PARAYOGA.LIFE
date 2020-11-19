import {Suspense} from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout.jsx'), {ssr: false});
const StructureProducts = dynamic(
  () => import('../components/pageProducts/StructureProducts.jsx'),
  {ssr: false}
);

export default function EsterillaParaYoga() {
  return (
    <Layout
      title='Esterillas para Yoga | PARAYOGA.LIFE'
      description='Principalmente necesitas una esterilla o colchoneta, básica para cualquier posición y sin la cual podría ser muy doloroso hacer las posiciones. Aquí te ayudaremos a que puedas conseguir la mejor alfombrilla.'
    >
      <div className='container'>
        <header className='d-flex justify-content-center mt-4 mb-3'>
          <h1 className='h1-title'>Esterilla para yoga</h1>
        </header>
        <p className='p-intro'>
          Me alegro mucho por ti, si estas leyendo esto es porque estás pensando
          seriamente comenzar a conectar el cuerpo, la respiración y la mente a
          través del yoga, bien sabes que tu salud esta primero, necesitas estar
          en un estado de calma y serenidad donde puedas meditar y pensar sobre
          tu futuro y tu pasado, pero más importante aún, que estoy haciendo con
          mi presente. ¿Estoy dando realmente lo mejor de mi?
          <b>
            <i> Claro que SI.</i>
          </b>
          <p className='p-intro'>
            Ciertamente necesitarás algunos utensilios que te faciliten hacer
            los ejercicios que el yoga propone. Principalmente necesitas una
            esterilla o colchoneta, básica para cualquier posición y sin la cual
            podría ser muy doloroso hacer las posiciones. Aquí te ayudaremos a
            que puedas conseguir la mejor alfombrilla.
          </p>
        </p>
        <div className='row'>
          <Suspense>
            <StructureProducts
              invisible={true}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla1_fpzybo.webp'
              title='KG Physio Esterilla de Yoga Extra Grueso 12mm con Correa de Hombro'
              previous_price='29.99'
              current_price='21.99'
              url='https://www.amazon.es/Esterilla-KG-Colchoneta-Gimnasio-colchoneta/dp/B01MRNZ2II/ref=sr_1_52?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&dchild=1&keywords=esterilla+yoga&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=8-52'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla2_kw5zzd.webp'
              title='Colchoneta de Yoga de NBR de Alta Densidad y Extra Gruesa de 12mm Diseñada para Pilates'
              previous_price='24.99'
              current_price='21.99'
              url='https://www.amazon.es/Reehut-Colchoneta-Densidad-Entrenamiento-Port%C3%A1til%EF%BC%88Rojo%EF%BC%89/dp/B06XHH13SX/ref=sr_1_20?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&dchild=1&keywords=esterilla+yoga&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=8-20'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla3_p4lu6j.webp'
              title='TOPLUS Esterilla Yoga Antideslizante Alfombrilla de Yoga 183cm x 61cm'
              previous_price='27.99'
              current_price='19.03'
              url='https://www.amazon.es/TOPLUS-Esterilla-Antideslizante-Profesional-Alfombrilla/dp/B07RL2N3YN/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&dchild=1&keywords=esterilla+yoga&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=8-6'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla4_dzct0k.webp'
              title='Dustgo Esterilla Antideslizante con Material ecológico TPE con líneas corporales'
              previous_price='32.99'
              current_price='26.39'
              url='https://www.amazon.es/Dustgo-Colchoneta-Antideslizante-corporales-Entrenamiento/dp/B07Y2YVGZS/ref=sr_1_30?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&dchild=1&keywords=esterilla+yoga&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=8-30'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla5_bv0f79.webp'
              title='Homtiky Esterilla Yoga, Yoga Mat para Entrenamiento físico con Correa y Bolsa'
              previous_price='40.07'
              current_price='34.99'
              url='https://www.amazon.es/Homtiky-Esterilla-Antideslizante-Entrenamiento-Transporte/dp/B0868S5K7D/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&dchild=1&keywords=esterilla+yoga&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQTdFUE5YV0xPOEFYJmVuY3J5cHRlZElkPUEwMTQxMTA3MkVNQ1RXMjdRWlhJWSZlbmNyeXB0ZWRBZElkPUEwOTg4MzMxM00xQlI4RlVJQTVFUCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604330390/PARAYOGA.LIFE/Esterillas/esterilla6_rsn4xs.webp'
              title='UMI Colchón para Yoga NBR Colchoneta Antideslizante Ideal para Pilates'
              previous_price='40.07'
              current_price='33.28'
              url='https://www.amazon.es/Essentials-Colchoneta-Antideslizante-Ejercicios-Estiramientos/dp/B07D52QVF5/ref=sxin_9_pb?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SGTS04SZ783O&cv_ct_cx=esterilla+yoga&dchild=1&keywords=esterilla+yoga&pd_rd_i=B07D52QVF5&pd_rd_r=0b5addc2-1e94-4d3e-997f-1d34c0f9dd89&pd_rd_w=JewGw&pd_rd_wg=iWfFQ&pf_rd_p=be3cab23-ac82-409b-a7c9-e4788fc0e777&pf_rd_r=2F4EZ753CGA7469HY5AC&qid=1603928055&sprefix=esterilas%2Caps%2C272&sr=1-2-cc7a04fe-cc55-42ad-b883-1b910070c86a'
            />
          </Suspense>
        </div>
        {/* <section className='reasons my-5'>
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
        </section> */}
        {/* <section className='other-products my-5'>
          <h3 className='vertical-line h2-title'>
            Además de esterillas para yoga, en nuestra tienda tenemos:
          </h3>
          <Aceite />
        </section> */}
      </div>
    </Layout>
  );
}

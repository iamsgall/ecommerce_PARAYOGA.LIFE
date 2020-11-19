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
      title='Comprar Bolsas para Yoga | PARAYOGA.LIFE'
      description='Descubre la mejor bolsa para yoga, que se acomode a tu personalidad y deslumbre todo el potencial que llevas dentro.'
    >
      <div className='container'>
        <header className='d-flex justify-content-center mt-4 mb-3'>
          <h1 className='h1-title'>Bolsas de gimnasio para yoga</h1>
        </header>
        <p className='p-intro'>
          Cansada o cansado de llevar tu colchoneta en mano. A que es incómodo
          verdad. Las bolsas de gimnasio hacen esta tarea mucho más facil. Solo
          agarra tu bolso, coloca dentro tu esterilla y vámonos!. Una nota para
          los caballeros: A tu chica le encantara un regalo como este 😍.
          <p className='p-intro'>
            Las carteras para gimnasio te permiten llevar más objetos encima de
            los que imaginas. <b>¿Seguro?</b> ¿te preguntarás?. La respuesta es
            Sí; y muchos. Estos bolsos además de contar por supuesto con el
            espacio adecuado del tapiz de yoga, los bolsillos interiores y
            exteriores son perfectos para guardar toallas, móviles, llaves,
            botellas de agua, monederos y un largo etcétera. Espaciosa y muy
            práctica. <b>Disfrútala</b>
          </p>
        </p>
        <div className='row'>
          <Suspense>
            <StructureProducts
              invisible={true}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso6_dvpbkw.webp'
              title='Lotuscrafts Bolsa Yoga Mysore - Justa y Ecológica - Funda Esterilla Yoga - Bolsa'
              previous_price='24.89'
              current_price='19.95'
              url='https://www.amazon.es/Lotuscrafts-MYSORE-algod%C3%B3n-org%C3%A1nico-certificado/dp/B00CO5MVP6/ref=sr_1_16?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos%2Bpara%2Byoga&qid=1604590458&sr=8-16&th=1'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso5_xa4vda.webp'
              title='Lotuscrafts Bolsa Yoga para Esterilla PUNE - Justa y Ecológica - Funda Esterilla'
              previous_price='30.99'
              current_price='24.95'
              url='https://www.amazon.es/Lotuscraft-suficiente-esterillas-accesorios-ecol%C3%B3gico/dp/B01M1UP35V/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos%2Bpara%2Byoga&qid=1604590458&sr=8-12&th=1'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso4_osyv9m.webp'
              title='Boence Bolsa,Bolsa de Transporte para Esterilla. Resistente, Bolsillos Grande'
              previous_price='19.99'
              current_price='15.88'
              url='https://www.amazon.es/esterilla-cremallera-resistente-cremalleras-almacenamiento/dp/B074KN29JQ/ref=sr_1_2_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos%2Bpara%2Byoga&qid=1604590458&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRSllVRE5MNUo2REYmZW5jcnlwdGVkSWQ9QTA0ODAzNjYyM05ON01VQ1RKTzA1JmVuY3J5cHRlZEFkSWQ9QTA3MDg2NzAyRTBGTkRJMk44VlFOJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso3_lhnt4l.webp'
              title='Gonex Bolsa para Colchoneta de Yoga, Funda Esterilla Yoga Ejercicios'
              previous_price='19.47'
              current_price='15.99'
              url='https://www.amazon.es/Gonex-Colchoneta-Esterilla-Ejercicios-Impermeable/dp/B07W5S3Q3S/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos%2Bpara%2Byoga&qid=1604590458&sr=8-6&th=1'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso2_poz850.webp'
              title='Gonex Bolsa para Colchoneta de Yoga,   Duradera Tela Impermeable'
              previous_price='19.47'
              current_price='15.99'
              url='https://www.amazon.es/Gonex-Colchoneta-Esterilla-Ejercicios-Impermeable/dp/B07ZFGMN34/ref=sr_1_26_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos%2Bpara%2Byoga&qid=1604590458&sr=8-26-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRSllVRE5MNUo2REYmZW5jcnlwdGVkSWQ9QTA0ODAzNjYyM05ON01VQ1RKTzA1JmVuY3J5cHRlZEFkSWQ9QTA4NDU3NzcxQjdWUkFNSllVNzlDJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1'
            />
            <StructureProducts
              invisible={false}
              image='https://res.cloudinary.com/ico4etech/image/upload/v1604591628/PARAYOGA.LIFE/Bolsos/bolso1_h4jauu.webp'
              title='Bolsas de Gimnasio Mujeres,, Bolsa de asa de yoga con correa'
              previous_price='25.88'
              current_price='15.99'
              url='https://www.amazon.es/Gimnasio-colchoneta-Compartimento-Bolsillo-Natacion/dp/B07W3S4LGJ/ref=sr_1_10?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bolsos+para+yoga&qid=1604590458&sr=8-10'
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

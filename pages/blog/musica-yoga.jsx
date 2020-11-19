import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../../components/Layout.jsx'), {
  ssr: false,
});
import Image from 'next/image';

export default function musicaYoga() {
  return (
    <Layout
      title='¿Es la música yoga efectiva?'
      description='Lo que leerás a continuación es mi experiencia personal, muy corta la verdad, pero que de seguro a más de uno podrá inspirar para hacer más divertidas sus sesiones de yoga.'
    >
      <article className='container'>
        <h1 className='h1-title text-center mt-4 mb-3'>
          ¿Es la música yoga efectiva?
        </h1>
        <p className='p-intro'>
          Alguna vez has sentido, un temor muy interno de no saber que quieres
          hacer con tu vida. Más de una vez me he despertado asustado por ideas
          que no tienen ni sentido ni razón en mi vida, pero a mi me mente le
          gusta jugarme una mala pasada. ¿Alguna vez has estado en esa
          situación? Realmente espero que no, porque no es para nada agradable.
          Lo que intento comunicarte a continuación es un poco de mi
          experiencia, y como la práctica del yoga y la música no hablada han
          creado una transformación positiva en mi que aún sigo utilizando.{' '}
          <b>Disfrútala.</b>
        </p>

        <p className='p-intro'>
          Atreverse a hacer cambios internos en ti, es duro, es difícil y muchas
          veces preferimos la comodidad, eso que llaman el estado de "comfort".
          No soy un experto en yoga, no es mi objetivo; comunicar es lo que me
          mueve, aprender, volver a aprender y transmitir lo aprendido es mi
          granito de arena al mundo. Quiero inspirarte, darte ese pequeño
          empujoncito que quizás necesitas para mover el cul.. y hacer algo
          grande con nuestras vidas. ¿Quién no desea sentirse bien y estar en un
          estado de paz alrededor suyo todo el día?
        </p>
        <div className='d-flex justify-content-center'>
          <Image
            src='https://res.cloudinary.com/ico4etech/image/upload/v1604159708/PARAYOGA.LIFE/SVGs/People_doing_leisure_activities_on_the_balconies_during_Coronavirus-pana_1_ps1ole.svg'
            className='img-fluid img-thumbnail shadow-sm'
            alt='Personas haciendo actividades de ocio en los balcones durante la pandemia de coronavirus'
            width={750}
            height={500}
            loading='lazy'
            style={{
              width: '100%',
            }}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <a
            className='mt-2'
            href='https://stories.freepik.com/people'
            rel='nofollow'
          >
            Illustration by Freepik Stories
          </a>
        </div>
        <section className='summary mt-4 mb-5'>
          <p
            className='p-intro'
            style={{
              fontSize: 18,
            }}
          >
            <b>Contenido del Artículo</b>
          </p>
          <ul className='list-unstyled'>
            <li className='media my-3'>
              <Image
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604333189/PARAYOGA.LIFE/1_f44tic.webp'
                className='mr-3 img-fluid'
                alt='Uno fondo azul, color blanco'
                width={35}
                height={35}
                loading='lazy'
                style={{
                  width: '100%',
                }}
              />

              <div className='media-body ml-2'>
                <ul
                  style={{
                    padding: 0,
                  }}
                >
                  <li
                    style={{
                      listStyle: 'none',
                    }}
                  >
                    <span className='p-intro'>Tipos de música yoga</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#kundalini' rel='nofollow'>
                            Yoga Kundalini
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#india' rel='nofollow'>
                            Yoga India
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#naturaleza' rel='nofollow'>
                            Yoga con Sonidos de Naturaleza
                          </a>
                        </i>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className='media my-3'>
              <Image
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604333189/PARAYOGA.LIFE/2_c7wipl.webp'
                className='mr-3 img-fluid'
                alt='Dos fondo verde, color blanco'
                width={35}
                height={35}
                loading='lazy'
                style={{
                  width: '100%',
                }}
              />

              <div className='media-body ml-2'>
                <ul
                  style={{
                    padding: 0,
                  }}
                >
                  <li
                    style={{
                      listStyle: 'none',
                    }}
                  >
                    <span className='p-intro'>¿Cómo buscar música yoga?</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#platform-music' rel='nofollow'>
                            Plataformas de Música
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#english-music' rel='nofollow'>
                            Palabras clave para encontrar la mejor música yoga
                            en inglés
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#spanish-music' rel='nofollow'>
                            Palabras clave para encontrar la mejor música yoga
                            en español
                          </a>
                        </i>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-4 mb-3'>
            Tipos de música yoga
          </h2>
          <p className='p-intro'>
            Pues si, la música para yoga ha sido catalogada en varios estilos y
            modalidades las cuales cuentan cada una con sus particularidades,
            pero que desde mi punto de vista las he dividido en solo 3
            principalmente para resumir, pero de seguro existen muchas más:
          </p>
          <p className='p-intro'>
            El{' '}
            <b>
              <span id='kundalini'>kundalini yoga</span>
            </b>{' '}
            es una disciplina física, mental que se basa en el desarrollo de la
            energía, como un misterioso poder que reside en el ser humano. La
            música que lo compone es principalmente tambores y flautas pero con
            una sutileza y perfección que te hacen dejar la mente en blanco y
            sentir como su música te hace viajar de un lugar a otro. 100%
            Recomendado.
          </p>
          <p className='p-intro'>
            La música{' '}
            <b>
              <span id='india'>yoga india</span>
            </b>{' '}
            por su parte, es su principal fuente de inspiración, ya que esta
            disciplina fue creada precisamente en este país, con unos cimientos
            muy claros, en la meditación y liberación, según sus creadores y
            principales practicantes. Lo que nació como una cultura diferente en
            el Medio Oriente se ha vuelto cada vez más y más parte de nuestras
            vidas, ya que tanto adultos como los más peques se han introducido
            en las prácticas yoga desde muy temprana edad.
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1604159708/PARAYOGA.LIFE/SVGs/Healthy_habit-pana_umew6m.svg'
              alt='Dos personas haciendo yoga en el bosque con sonidos de la naturaleza'
              width={750}
              height={500}
              loading='lazy'
              style={{
                width: '100%',
              }}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <a
              className='mt-2'
              href='https://stories.freepik.com/health'
              rel='nofollow'
            >
              Illustration by Freepik Stories
            </a>
          </div>
          <p className='p-intro mt-4'>
            El{' '}
            <b>
              <span id='naturaleza'>yoga con sonidos de naturaleza</span>
            </b>
            , es a mi humilde opinión, la que mejor me ha acompañado en estas
            últimas semanas ya que soy un amante de los sonidos naturales, y las
            melodías armoniosas que estos componen cuandos se entrelazan, como
            pueden ser un aguacero en pleno abril cerca de una cascada, o qué
            decir del sonido a leña quemada, que incluso te recuerdan como huele
            esta cuando se hace ceniza, o mejor aún las olas del mar cuando
            estamos acostados en la arena junto a la persona que amamos a medio
            atardecer. ¿A que es genial verdad?
          </p>
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-5 mb-3'>
            ¿Cómo buscar música yoga?
          </h2>
          <p className='p-intro'>
            Quizás para muchos no sea una sorpresa cómo encontrar lo que están
            buscando en internet, pero en este mundo somos millones y millones
            de personas, y buscamos las cosas de manera muy diferente, se los
            dice alguien que está envuelto en el sector tecnológico y aunque
            plataformas de búsqueda como Google o YouTube están diseñadas para
            esto, nunca están de más un par de consejos.
          </p>
          <p className='p-intro'>
            <span id='platform-music'>
              <b>Plataformas de música</b>
            </span>
            , hay muchas, que escoger, eso sí es interesante. Te las resumiré en
            una pequeña lista las que considero mejores y las que he utilizado
            alguna vez. Algunas son de pago, otras no. Pero con las gratuitas es
            más que suficiente. <b>Nota</b>: Si por alguna razón te salen
            anuncios en alguna de las que son gratuitas, puedes buscar algún
            bloqueador de anuncios como extensión para tu navegador y resolver
            el problema.
          </p>
          <p className='text-center p-intro'>
            <a rel='nofollow' href='https://www.youtube.com/'>
              YouTube
            </a>{' '}
            |{' '}
            <b>
              <a rel='nofollow' href='https://music.youtube.com/'>
                Youtube Music
              </a>
            </b>{' '}
            |{' '}
            <a rel='nofollow' href='https://www.apple.com/apple-music/'>
              Apple Music
            </a>{' '}
            |{' '}
            <b>
              <a rel='nofollow' href='https://www.spotify.com/us/'>
                Spotify
              </a>{' '}
            </b>
            |{' '}
            <a
              rel='nofollow'
              href='https://play.google.com/music/managemusic?u=0#'
            >
              Play Music
            </a>{' '}
          </p>
          <p className='p-intro'>
            Youtube Music es para mi la mejor plataforma de música, quizás la
            conocías quizas, no, pero vale la pena echarle un ojo, ya que está
            muy bien estructurada, ya sea que solo busques canciones por
            artistas, álbumes o sencillos, o peor aún, no recuerdes cuál es el
            título de la canción, y solo te sepas una estrofa, Youtube Music es
            tu mejor aliada en ese caso.
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1604159708/PARAYOGA.LIFE/SVGs/Search_engines-rafiki_fhfwau.svg'
              alt='Persona buscando informacion en Internet'
              width={750}
              height={500}
              loading='lazy'
              style={{
                width: '100%',
              }}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <a
              className='mt-2'
              href='https://stories.freepik.com/web'
              rel='nofollow'
            >
              Illustration by Freepik Stories
            </a>
          </div>
          <p className='p-intro'>
            La siguiente lista está dividida en dos filas, y son las palabras
            más comunes para encontrar la mejor música para yoga en{' '}
            <span id='english-music'>
              {' '}
              <b>español</b>
            </span>{' '}
            e
            <span id='spanish-music'>
              {' '}
              <b>inglés</b>{' '}
            </span>
            respectivamente. Solo copia y pega uno de los textos a continuación.
          </p>
          <div className='row'>
            <div className='col-sm-12 col-md-3 offset-md-3'>
              <ul className=''>
                <li>
                  <i>Música yoga</i>
                </li>
                <li>
                  <i>Música yoga kundalini</i>
                </li>
                <li>
                  <i>Música yoga relajante</i>
                </li>
                <li>
                  <i>Música yoga youtube</i>{' '}
                </li>
                <li>
                  <i>Música yoga niños</i>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-3'>
              <ul>
                <li>
                  <i>Música yoga india</i>
                </li>
                <li>
                  <i>Youtube música yoga</i>
                </li>
                <li>
                  <i>Música yoga para escuchar</i>
                </li>
                <li>
                  <i>Música yoga relax</i>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-3 offset-md-3'>
              <hr />
              <ul className=''>
                <li>
                  <i>Yoga music</i>
                </li>
                <li>
                  <i>Yoga music indian</i>
                </li>
                <li>
                  <i>Yoga music site:youtube.com</i>
                </li>
                <li>
                  <i>Yoga music youtube</i>{' '}
                </li>
                <li>
                  <i>Beat yoga music</i>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-3'>
              <hr />
              <ul>
                <li>
                  <i>Relaxing yoga music</i>
                </li>
                <li>
                  <i>Yoga music for kids</i>
                </li>
                <li>
                  <i>Play yoga music</i>
                </li>
                <li>
                  <i>Yoga music video</i>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <p className='p-intro'>
          En resumen, el yoga es fenomenal, te ayuda a concentrarte, relajarte y
          estar en paz contigo mismo, deja tus pensamientos fluir libremente y
          un sinnúmero de beneficios más que puedes leer en otros blogs
          dedicados o mejor aún llegar experimentar tú misma o mismo sí
          comienzas a practicar el yoga hoy. El mejor momento para empezar un
          cambio fue ayer, y el segundo momento es hoy y ahora, no dejes pasar
          esta oportunidad única.
        </p>
        <p className='p-intro text-right'>
          <b>Gracias por leer</b>
        </p>
      </article>
      <style jsx>{`
        a {
          color: #000;
        }
      `}</style>
    </Layout>
  );
}

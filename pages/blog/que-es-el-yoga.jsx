import React from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../../components/Layout.jsx'), {
  ssr: false,
});
import Image from 'next/image';

export default function queEsElYoga() {
  return (
    <Layout
      title='
      ¿Qué es el yoga? Métodos, Tipos, y Posturas'
      description='El yoga es la habilidad de dominar la mente y el cuerpo a través de la meditación y sus movimientos armoniosos'
    >
      <article className='container'>
        <h1 className='h1-title text-center mt-4 mb-3'>¿Qué es el yoga?</h1>
        <p className='p-intro'>
          El yoga es la habilidad de dominar la mente y el cuerpo a través de la
          meditación y sus movimientos armoniosos. Con una historia de más de 50
          siglos de antigüedad, son varios los estilos de yoga que combinan
          tanto posturas físicas, técnicas de respiración y principalmente
          relajación.
        </p>

        <p className='p-intro'>
          Creo que ha muchos nos ha pasado, que la primera vez que buscamos
          información respecto al yoga, nos queda un sinnúmero de interrogantes,
          y es que no necesitas ser un experto con doctorados para conocer las
          bases del yoga y como empezar a practicarlo. En la búsqueda de
          respuestas en un momento oscuro de mi vida, me vino a la memoria los
          recuerdos de escuchar a mi madre cuando decía en las tardes después de
          llegar de su trabajo cansada y muy agotada,{' '}
          <b>"Más tarde tengo clases de yoga con una sonrisa"</b>. Yo pensaba,{' '}
          <b>Wow</b>, cómo puede llevar la casa, trabajar hasta las 5.00pm y aún
          así tener energía para hacer yoga con más de 40 años.
        </p>
        <p className='p-intro'>
          Fue así como decidí tomar la iniciativa y convertir el ásana en parte
          de mi día a día. Para mi el yoga no es más que ser tú el dueño de tus
          propias emociones y sentimientos. No dejar que malas vibras entren a
          tu vida incluso si están cerca. Tu decides como te afectan las
          circunstancias a tu alrededor, porque tu controlas tu mente.{' '}
          <b>Atraes lo que eres y piensas</b>.
        </p>
        <div className='d-flex justify-content-center'>
          <Image
            src='https://res.cloudinary.com/ico4etech/image/upload/v1604787628/PARAYOGA.LIFE/SVGs/Mental_health-cuate_k5xejk.svg'
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
                    <span className='p-intro'>Historia</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#resumen1' rel='nofollow'>
                            Resumen
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
                    <span className='p-intro'>Filosofía</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#Hatha-yoga' rel='nofollow'>
                            Hatha yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Raja-yoga' rel='nofollow'>
                            Raja yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Karma-yoga' rel='nofollow'>
                            Karma yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Bhakti-yoga' rel='nofollow'>
                            Bhakti yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Jnana-yoga' rel='nofollow'>
                            Jnana yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Tantra-yoga' rel='nofollow'>
                            Tantra yoga
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
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604333189/PARAYOGA.LIFE/3_uecniq.webp'
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
                    <span className='p-intro'>Chakras</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#Sahasrara' rel='nofollow'>
                            Sahasrara
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Ajna' rel='nofollow'>
                            Ajna
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Vishuddha' rel='nofollow'>
                            Vishuddha
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Anahata' rel='nofollow'>
                            Anahata
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Manipura' rel='nofollow'>
                            Manipura
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Svadhishthana' rel='nofollow'>
                            Svadhishthana
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Muladhara' rel='nofollow'>
                            Muladhara
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
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604794378/PARAYOGA.LIFE/4_je11h9.webp'
                alt='Cuatro fondo rosa, color blanco'
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
                    <span className='p-intro'>Tipos de Yoga</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#Ashtanga-yoga' rel='nofollow'>
                            Ashtanga yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Bikram-yoga' rel='nofollow'>
                            Bikram yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Hatha-yoga' rel='nofollow'>
                            Hatha yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Yoga-Iyengar' rel='nofollow'>
                            Yoga Iyengar
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Jivamukti-yoga' rel='nofollow'>
                            Jivamukti yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Kripalu-yoga' rel='nofollow'>
                            Kripalu yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Kundalini-yoga' rel='nofollow'>
                            Kundalini yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Power-yoga' rel='nofollow'>
                            Power yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Sivananda-yoga' rel='nofollow'>
                            Sivananda yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Viniyoga-yoga' rel='nofollow'>
                            Viniyoga yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Yin-yoga' rel='nofollow'>
                            Yin yoga
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Yoga-prenatal' rel='nofollow'>
                            Yoga prenatal
                          </a>
                        </i>
                      </li>
                      <li>
                        <i>
                          <a href='#Yoga-restaurativo' rel='nofollow'>
                            Yoga restaurativo
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
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604794379/PARAYOGA.LIFE/5_ioe4wi.webp'
                className='mr-3 img-fluid'
                alt='Cinco fondo rojo, color blanco'
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
                    <span className='p-intro'>Beneficios</span>
                    <ul>
                      <li>
                        <i>
                          <a href='#resumen2' rel='nofollow'>
                            Resumen
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
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604794380/PARAYOGA.LIFE/6_kbz869.webp'
                className='mr-3 img-fluid'
                alt='Seis fondo morado, color blanco'
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
                    <span className='p-intro'>
                      Riesgos y efectos secundarios del yoga
                    </span>
                    <ul>
                      <li>
                        <i>
                          <a href='#resumen3' rel='nofollow'>
                            Resumen
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
            Historia del yoga.
          </h2>
          <p className='p-intro'>
            La palabra <b>Yoga</b> es proveniente de la lengua clásica de la
            India, que significa <b>Unir | Conectar | Relacionar</b>
            <br />
            Con unos inicios muy claros en su cultura, su finalidad es generar y
            fortalecer la conexión entre el ser humano y el universo. Para
            lograr esto, se ayuda de las posturas, los movimientos y la
            respiración adecuada para lograr estar en un estado de perfecto
            equilibrio, tanto a nivel físico como espiritual.
            <br />
            <br />
            Aún cuando se desconoce el creador original del yoga, su repercución
            no ha hecho más que ganar popularidad, sobre todo estos ultimos
            años. A los aprendices de yoga, se les conoce como{' '}
            <b>yogis: para hombres</b> y <b>yoginis: para mujeres</b>.
            <br />
            Durante los siguientes años yoguis y yoguinis difundieron esta
            disciplina en escuelas cada vez con más estudiantes, quienes a su
            vez comunicaban sus aprendizaje volviendo el yoga una práctica cada
            vez más global.
            <br />
            <br />
            El <b>Yoga Sutra</b>, es un tratado de filosofía yóguica de más de
            2.000 años de antigüedad, con una guía de como dominar la mente y
            las emociones para crecer espiritualmente. La tradición comenzó a
            ganar popularidad en Occidente a finales del siglo XIX. En las
            décadas de 1920 y 1930 se produjo un <b>BOOM</b> de interés por el
            yoga postural, primero en India y luego en Occidente.
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1605036365/PARAYOGA.LIFE/SVGs/Chakras-pana_imf0ck.svg'
              alt='Persona meditando'
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
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-5 mb-3'>
            Los 7 Chakras y su Significado
          </h2>
          <p className='p-intro'>
            Para difundir su mensaje místico y conducir las sesiones, el yoga
            utiliza la imagen de un árbol con raíces, tronco, ramas, flores y
            frutos. Cada "rama" del yoga representa un enfoque y un conjunto de
            características diferentes.
            <br />
            <br />
            Las seis ramas de los chakras son:
            <ul>
              <li className='py-1'>
                <b>Hatha yoga:</b> esta es la rama física y mental diseñada para
                preparar el cuerpo y la mente.
              </li>
              <li className='py-1'>
                <b>Raja yoga:</b> esta rama implica la meditación y el estricto
                cumplimiento de una serie de pasos disciplinarios conocidos como
                los "ocho miembros" del yoga.
              </li>
              <li className='py-1'>
                <b>Karma yoga:</b> este es un camino de servicio que tiene como
                objetivo crear un futuro libre de negatividad y egoísmo.
              </li>
              <li className='py-1'>
                <b>Bhakti yoga:</b> tiene como objetivo establecer el camino de
                la devoción, una forma positiva de canalizar las emociones y
                cultivar la aceptación y la tolerancia.
              </li>
              <li className='py-1'>
                <b>Jnana yoga:</b> esta rama del yoga trata sobre la sabiduría,
                el camino del erudito y el desarrollo del intelecto a través del
                estudio.
              </li>
              <li className='py-1'>
                <b>Tantra yoga:</b> este es el camino del ritual, la ceremonia o
                la consumación de una relación.
              </li>
            </ul>
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1605626777/PARAYOGA.LIFE/Tabla-Chakras-1004x1024_s3eay9.jpg'
              alt='Tabla de chackras'
              width={800}
              height={800}
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
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-5 mb-3'>
            Tipos de Yoga y su Significado
          </h2>
          <p className='p-intro'>
            La evolución del yoga desde sus inicios ha sufrido diversos cambios
            para bien, esta vez más enfocado en el ejercicio, la fuerza, la
            flexibilidad y la respiración. Ganar destreza en sus movimientos
            hace el bien a tu estado físico y mental. Existen muchos estilos de
            yoga, pero ninguno es superior a otro, sin embargo, tu elección
            debería estar basada en tu condición física.
            <br />
            <br />
            Los diferentes tipos de yoga son:
            <ul>
              <li className='py-1'>
                <b>Ashtanga yoga:</b> este tipo de yoga utiliza antiguas
                enseñanzas de yoga. Sin embargo, se hizo popular durante la
                década de 1970. Ashtanga aplica seis secuencias establecidas de
                posturas que vinculan rápidamente cada movimiento con la
                respiración.
              </li>
              <li className='py-1'>
                <b>Bikram yoga:</b> también conocido como yoga "caliente",
                Bikram se produce en habitaciones con calefacción artificial a
                temperaturas de casi 105 grados y 40 por ciento de humedad.
                Consta de 26 poses y una secuencia de dos ejercicios de
                respiración.
              </li>
              <li className='py-1'>
                <b>Hatha yoga:</b> este es un término genérico para cualquier
                tipo de yoga que enseñe posturas físicas. Las clases de “Hatha”
                suelen servir como una suave introducción a las posturas básicas
                de yoga.
              </li>
              <li className='py-1'>
                <b>Yoga Iyengar:</b> este tipo de yoga se enfoca en encontrar la
                alineación correcta en cada postura utilizando una variedad de
                accesorios, como bloques, mantas, correas, sillas y cojines.
              </li>
              <li className='py-1'>
                <b>Jivamukti yoga:</b> Jivamukti significa "liberación mientras
                se vive". Este tipo surgió en 1984 e incorpora enseñanzas y
                prácticas espirituales que se centran en el flujo acelerado
                entre poses en lugar de las poses en sí mismas. Este enfoque se
                llama vinyasa. Cada clase tiene un tema, que se explora a través
                de las escrituras del yoga, el canto, la meditación, las asanas,
                el pranayama y la música. El jivamukti yoga puede ser
                físicamente intenso.
              </li>
              <li className='py-1'>
                <b>Kripalu yoga:</b> este tipo enseña a los practicantes a
                conocer, aceptar y aprender del cuerpo. Un estudiante de Kripalu
                aprende a encontrar su propio nivel de práctica mirando hacia
                adentro. Las clases suelen comenzar con ejercicios de
                respiración y estiramientos suaves, seguidos de una serie de
                poses individuales y relajación final.
              </li>
              <li className='py-1'>
                <b>Kundalini yoga:</b> Kundalini significa "enrollado, como una
                serpiente". Kundalini yoga es un sistema de meditación que tiene
                como objetivo liberar la energía reprimida. Por lo general, una
                clase comienza cantando y termina cantando. En el medio,
                presenta asana, pranayama y meditación personalizados para crear
                un resultado específico.
              </li>
              <li className='py-1'>
                <b>Power yoga:</b> a fines de la década de 1980, los
                practicantes desarrollaron este tipo de yoga activo y atlético,
                basado en el sistema tradicional de ashtanga.
              </li>
              <li className='py-1'>
                <b>Sivananda:</b> Este es un sistema basado en una filosofía de
                cinco puntos. Esta filosofía mantiene que la respiración
                adecuada, la relajación, la dieta, el ejercicio y el pensamiento
                positivo trabajan juntos para formar un estilo de vida yóguico
                saludable. Por lo general, usa las mismas 12 asanas básicas,
                acompañadas de saludos al sol y poses de savasana.
              </li>
              <li className='py-1'>
                <b>Viniyoga:</b> Viniyoga puede adaptarse a cualquier persona,
                independientemente de su capacidad física. Los profesores de
                Viniyoga requieren una formación profunda y suelen ser expertos
                en anatomía y terapia de yoga.
              </li>
              <li className='py-1'>
                <b>Yin:</b> esta es una práctica de yoga tranquila y meditativa,
                también llamada yoga taoísta. El yin yoga permite liberar la
                tensión en las articulaciones clave, que incluyen:{' '}
                <i>los tobillos</i> | <i>rodillas</i> | <i>caderas</i> |{' '}
                <i>la espalda</i> | <i>cuello</i>
              </li>
              <li className='py-1'>
                <b>Yoga prenatal:</b> el yoga prenatal utiliza posturas que los
                practicantes han diseñado para las personas embarazadas. Puede
                ayudar a las personas a volver a estar en forma después del
                embarazo, así como apoyar la salud durante el embarazo.
              </li>
              <li className='py-1'>
                <b>Yoga restaurativo:</b> este es un método relajante de yoga.
                Una persona pasa una clase de yoga restaurativo en cuatro o
                cinco posturas simples, utilizando accesorios como mantas y
                refuerzos para sumergirse en una relajación profunda sin hacer
                ningún esfuerzo para mantener la postura.
              </li>
            </ul>
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1605626666/PARAYOGA.LIFE/SVGs/Chakras-rafiki_tdr9yj.svg'
              alt='Mujer meditando'
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
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-5 mb-3'>
            Beneficios del Yoga
          </h2>
          <p className='p-intro'>
            Mantener una práctica regular de yoga puede aumentar los beneficios
            para la salud física y mental. Si bien hay estudios que demuestran
            la anterior afirmación, recordemos que cada una de nosotros somos
            únicos y especiales, y lo que funciona para uno no funciona para
            todos, pero eso es solo la punta del iceberg. Dividiremos la
            siguiente lista en beneficios <i>físicos</i> y <i>mentales</i> para
            que sea de más facil lectura para el lector. Continuemos ...
            <br />
            <br />
            Los diferentes tipos de yoga son:
            <ul>
              <li className='py-1'>
                <b>Ashtanga yoga:</b> este tipo de yoga utiliza antiguas
                enseñanzas de yoga. Sin embargo, se hizo popular durante la
                década de 1970. Ashtanga aplica seis secuencias establecidas de
                posturas que vinculan rápidamente cada movimiento con la
                respiración.
              </li>
              <li className='py-1'>
                <b>Bikram yoga:</b> también conocido como yoga "caliente",
                Bikram se produce en habitaciones con calefacción artificial a
                temperaturas de casi 105 grados y 40 por ciento de humedad.
                Consta de 26 poses y una secuencia de dos ejercicios de
                respiración.
              </li>
              <li className='py-1'>
                <b>Hatha yoga:</b> este es un término genérico para cualquier
                tipo de yoga que enseñe posturas físicas. Las clases de “Hatha”
                suelen servir como una suave introducción a las posturas básicas
                de yoga.
              </li>
              <li className='py-1'>
                <b>Yoga Iyengar:</b> este tipo de yoga se enfoca en encontrar la
                alineación correcta en cada postura utilizando una variedad de
                accesorios, como bloques, mantas, correas, sillas y cojines.
              </li>
              <li className='py-1'>
                <b>Jivamukti yoga:</b> Jivamukti significa "liberación mientras
                se vive". Este tipo surgió en 1984 e incorpora enseñanzas y
                prácticas espirituales que se centran en el flujo acelerado
                entre poses en lugar de las poses en sí mismas. Este enfoque se
                llama vinyasa. Cada clase tiene un tema, que se explora a través
                de las escrituras del yoga, el canto, la meditación, las asanas,
                el pranayama y la música. El jivamukti yoga puede ser
                físicamente intenso.
              </li>
              <li className='py-1'>
                <b>Kripalu yoga:</b> este tipo enseña a los practicantes a
                conocer, aceptar y aprender del cuerpo. Un estudiante de Kripalu
                aprende a encontrar su propio nivel de práctica mirando hacia
                adentro. Las clases suelen comenzar con ejercicios de
                respiración y estiramientos suaves, seguidos de una serie de
                poses individuales y relajación final.
              </li>
              <li className='py-1'>
                <b>Kundalini yoga:</b> Kundalini significa "enrollado, como una
                serpiente". Kundalini yoga es un sistema de meditación que tiene
                como objetivo liberar la energía reprimida. Por lo general, una
                clase comienza cantando y termina cantando. En el medio,
                presenta asana, pranayama y meditación personalizados para crear
                un resultado específico.
              </li>
              <li className='py-1'>
                <b>Power yoga:</b> a fines de la década de 1980, los
                practicantes desarrollaron este tipo de yoga activo y atlético,
                basado en el sistema tradicional de ashtanga.
              </li>
              <li className='py-1'>
                <b>Sivananda:</b> Este es un sistema basado en una filosofía de
                cinco puntos. Esta filosofía mantiene que la respiración
                adecuada, la relajación, la dieta, el ejercicio y el pensamiento
                positivo trabajan juntos para formar un estilo de vida yóguico
                saludable. Por lo general, usa las mismas 12 asanas básicas,
                acompañadas de saludos al sol y poses de savasana.
              </li>
              <li className='py-1'>
                <b>Viniyoga:</b> Viniyoga puede adaptarse a cualquier persona,
                independientemente de su capacidad física. Los profesores de
                Viniyoga requieren una formación profunda y suelen ser expertos
                en anatomía y terapia de yoga.
              </li>
              <li className='py-1'>
                <b>Yin:</b> esta es una práctica de yoga tranquila y meditativa,
                también llamada yoga taoísta. El yin yoga permite liberar la
                tensión en las articulaciones clave, que incluyen:{' '}
                <i>los tobillos</i> | <i>rodillas</i> | <i>caderas</i> |{' '}
                <i>la espalda</i> | <i>cuello</i>
              </li>
              <li className='py-1'>
                <b>Yoga prenatal:</b> el yoga prenatal utiliza posturas que los
                practicantes han diseñado para las personas embarazadas. Puede
                ayudar a las personas a volver a estar en forma después del
                embarazo, así como apoyar la salud durante el embarazo.
              </li>
              <li className='py-1'>
                <b>Yoga restaurativo:</b> este es un método relajante de yoga.
                Una persona pasa una clase de yoga restaurativo en cuatro o
                cinco posturas simples, utilizando accesorios como mantas y
                refuerzos para sumergirse en una relajación profunda sin hacer
                ningún esfuerzo para mantener la postura.
              </li>
            </ul>
          </p>
          <div className='d-flex justify-content-center'>
            <Image
              className='img-fluid img-thumbnail shadow-sm'
              src='https://res.cloudinary.com/ico4etech/image/upload/v1605626666/PARAYOGA.LIFE/SVGs/Chakras-rafiki_tdr9yj.svg'
              alt='Mujer meditando'
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
        </section>
        <section>
          <h2 className='h2-title text-left vertical-line mt-5 mb-3'>
            Efectos Secundarios del Yoga
          </h2>
          <p className='p-intro'>
            Cuidar tu salud debería ser tu primera elección en todo ejercicio
            que ejecutes. El yoga por si solo, no debe causar dolor, a no ser
            que lleves mucho tiempo sin darle a tu cuerpo un poco de adrenalina,
            es decir, algo de ejercicio, sabes que los músculos se tensan un
            poco, pero es normal, con el ejercicio continuado y algunos
            estiramientos logras que todo tu cuerpo se relaje, y te lo
            agradezca.
            <br />
            <br />
            Ahora bien, cualquier mujer embarazada o que tenga una condición
            médica en curso, como presión arterial alta, glaucoma o ciática ,
            debe hablar con su médico antes de practicar yoga. Es posible que
            deban modificar o evitar algunas posturas de yoga. Al principio, no
            necesitas ejecutar posturas extremas y técnicas difíciles, como la
            posición de cabeza, la posición del loto y la respiración enérgica
            por mencionar algunas. Disfruta el proceso, es magnífico ya nos
            contarás.
          </p>
        </section>
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

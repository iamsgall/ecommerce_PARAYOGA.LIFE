import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout.jsx'));

export default function politicaDeCookies() {
  return (
    <Layout>
      <main>
        <header className='d-flex justify-content-center mt-4 mb-3'>
          <h1 className='h1-title text-center'>Política de Cookies</h1>
        </header>
        <div className='d-flex justify-content-center'>
          <div className='col-12'>
            <p>
              Cookie es un fichero que se descarga en su ordenador al acceder a
              determinadas páginas web. Las cookies permiten a una página web,
              entre otras cosas, almacenar y recuperar información sobre los
              hábitos de navegación de un usuario o de su equipo y, dependiendo
              de la información que contengan y de la forma en que utilice su
              equipo, pueden utilizarse para reconocer al usuario.
            </p>
            <p>
              El navegador del usuario memoriza cookies en el disco duro
              solamente durante la sesión actual ocupando un espacio de memoria
              mínimo y no perjudicando al ordenador. Las cookies no contienen
              ninguna clase de información personal específica, y la mayoría de
              las mismas se borran del disco duro al finalizar la sesión de
              navegador (las denominadas cookies de sesión).
            </p>
            <p>
              La mayoría de los navegadores aceptan como estándar a las cookies
              y, con independencia de las mismas, permiten o impiden en los
              ajustes de seguridad las cookies temporales o memorizadas.
            </p>
            <p>
              Sin su expreso consentimiento mediante la activación de las
              cookies en su navegador parayoga.life no enlazará en las cookies
              los datos memorizados con sus datos personales proporcionados en
              el momento del registro o la compra
            </p>
            <b
              style={{
                fontSize: 18,
              }}
            >
              ¿Qué tipos de cookies utiliza esta página web?
            </b>
            <ul className='mt-2'>
              <li>
                <b>Cookies técnicas: </b>
                <span>
                  Son aquéllas que permiten al usuario la navegación a través de
                  una página web, plataforma o aplicación y la utilización de
                  las diferentes opciones o servicios que en ella existan como,
                  por ejemplo, controlar el tráfico y la comunicación de datos,
                  identificar la sesión, acceder a partes de acceso restringido,
                  recordar los elementos que integran un pedido, realizar el
                  proceso de compra de un pedido, realizar la solicitud de
                  inscripción o participación en un evento, utilizar elementos
                  de seguridad durante la navegación, almacenar contenidos para
                  la difusión de videos o sonido o compartir contenidos a través
                  de redes sociales.
                </span>
              </li>
            </ul>
            <ul className='mt-2'>
              <li>
                <b>Cookies de personalización: </b>
                <span>
                  Son aquéllas que permiten al usuario acceder al servicio con
                  algunas características de carácter general predefinidas en
                  función de una serie de criterios en el terminal del usuario
                  como por ejemplo serian el idioma, el tipo de navegador a
                  través del cual accede al servicio, la configuración regional
                  desde donde accede al servicio, etc.
                </span>
              </li>
            </ul>
            <ul className='mt-2'>
              <li>
                <b>Cookies de análisis: </b>
                <span>
                  Son aquéllas que bien tratadas por nosotros o por terceros,
                  nos permiten cuantificar el número de usuarios y así realizar
                  la medición y análisis estadístico de la utilización que hacen
                  los usuarios del servicio ofertado. Para ello se analiza su
                  navegación en nuestra página web con el fin de mejorar la
                  oferta de productos o servicios que le ofrecemos.
                </span>
              </li>
            </ul>
            <ul className='mt-2'>
              <li>
                <b>Cookies publicitarias: </b>
                <span>
                  Son aquéllas que, bien tratadas por nosotros o por terceros,
                  nos permiten gestionar de la forma más eficaz posible la
                  oferta de los espacios publicitarios que hay en la página web,
                  adecuando el contenido del anuncio al contenido del servicio
                  solicitado o al uso que realice de nuestra página web. Para
                  ello podemos analizar sus hábitos de navegación en Internet y
                  podemos mostrarle publicidad relacionada con su perfil de
                  navegación.
                </span>
              </li>
            </ul>
            <ul className='mt-2'>
              <li>
                <b>Cookies de publicidad comportamental: </b>
                <span>
                  Son aquellas que permiten la gestión, de la forma más eficaz
                  posible, de los espacios publicitarios que, en su caso, el
                  editor haya incluido en una página web, aplicación o
                  plataforma desde la que presta el servicio solicitado. Estas
                  cookies almacenan información del comportamiento de los
                  usuarios obtenida a través de la observación continuada de sus
                  hábitos de navegación, lo que permite desarrollar un perfil
                  específico para mostrar publicidad en función del mismo.
                </span>
              </li>
            </ul>
            <ul className='mt-2'>
              <li>
                <b>Cookies de terceros: </b>
                <span>
                  La Web de parayoga.life puede utilizar servicios de terceros
                  que, por cuenta de Google, recopilaran información con fines
                  estadísticos, de uso del Site por parte del usuario y para la
                  prestacion de otros servicios relacionados con la actividad
                  del Website y otros servicios de Internet.
                </span>
              </li>
            </ul>
            <p>
              En particular, este sitio Web utiliza Google Analytics, un
              servicio analítico de web prestado por Google, Inc. con domicilio
              en los Estados Unidos con sede central en 1600 Amphitheatre
              Parkway, Mountain View, California 94043. Para la prestación de
              estos servicios, estos utilizan cookies que recopilan la
              información, incluida la dirección IP del usuario, que será
              transmitida, tratada y almacenada por Google en los términos
              fijados en la Web Google.com. Incluyendo la posible transmisión de
              dicha información a terceros por razones de exigencia legal o
              cuando dichos terceros procesen la información por cuenta de
              Google.
            </p>
            <p>
              El Usuario acepta expresamente, por la utilización de este Site,
              el tratamiento de la información recabada en la forma y con los
              fines anteriormente mencionados. Y asimismo reconoce conocer la
              posibilidad de rechazar el tratamiento de tales datos o
              información rechazando el uso de Cookies mediante la selección de
              la configuración apropiada a tal fin en su navegador. Si bien esta
              opción de bloqueo de Cookies en su navegador puede no permitirle
              el uso pleno de todas las funcionalidades del Website.
            </p>
            <p>
              Puede usted permitir, bloquear o eliminar las cookies instaladas
              en su equipo mediante la configuración de las opciones del
              navegador instalado en su ordenador:
            </p>
            <p className='text-center'>
              <span className='mx-4'>
                <a
                  href='https://support.google.com/chrome/answer/95647?hl=es'
                  rel='nofollow'
                >
                  Google
                </a>
              </span>
              <span className='mx-4'>
                <a
                  href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es'
                  rel='nofollow'
                >
                  Firefox
                </a>
              </span>
              <span className='mx-4'>
                <a
                  href='https://support.apple.com/kb/index?page=search&src=support_serp&locale=en_US&currentPage=1&product=&doctype=&includeArchived=false&query=delelte+cookies'
                  rel='nofollow'
                >
                  Safari
                </a>
              </span>
              <span className='mx-4'>
                <a
                  href='https://support.microsoft.com/search/results?query=delete+cookies&isEnrichedQuery=false'
                  rel='nofollow'
                >
                  Explorer
                </a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

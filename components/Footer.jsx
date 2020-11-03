import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='container mb-4'>
      <hr />
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center my-2'>
            <a href='#' rel='nofollow'>
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className='mx-2'
                style={{fontSize: 22, color: '#3b5998'}}
              />
            </a>
            <a href='#' rel='nofollow'>
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className='mx-2'
                style={{fontSize: 22, color: '#00acee'}}
              />
            </a>
            <a href='#' rel='nofollow'>
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className='mx-2'
                style={{fontSize: 22, color: '#3f729b'}}
              />
            </a>
            <a href='#' rel='nofollow'>
              <FontAwesomeIcon
                icon={['fab', 'pinterest']}
                className='mx-2'
                style={{fontSize: 22, color: '#c8232c'}}
              />
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-2'>
            <h4
              className='h4-title'
              style={{fontSize: 12, fontWeight: 'bold', marginBottom: 4}}
            >
              PREGUNTAS
            </h4>
            <div className='mb-2'>
              <li style={{listStyle: 'none'}}>
                <a
                  className='external-link'
                  rel='nofollow'
                  href='#'
                  style={{fontSize: 12}}
                >
                  ENVIOS / DEVOLUCIONES
                </a>
              </li>
              <li style={{listStyle: 'none'}}>
                <a
                  className='external-link'
                  rel='nofollow'
                  href='#'
                  style={{fontSize: 12}}
                >
                  FAQ
                </a>
              </li>
            </div>
          </div>
          <div className='col-sm-12 col-md-2'>
            <h4
              className='footer-h4'
              style={{fontSize: 12, fontWeight: 'bold', marginBottom: 4}}
            >
              SOBRE NOSOTROS
            </h4>
            <div className='mb-2'>
              <li style={{listStyle: 'none'}}>
                <a
                  className='external-link'
                  rel='nofollow'
                  href='#'
                  style={{fontSize: 12}}
                >
                  ¿QUIENES SOMOS?
                </a>
              </li>
            </div>
          </div>
          <div className='col-sm-12 col-md-2'>
            <h4
              className='footer-h4'
              style={{fontSize: 12, fontWeight: 'bold', marginBottom: 4}}
            >
              POLÍTICAS
            </h4>
            <div className='mb-2'>
              <li style={{listStyle: 'none'}}>
                <Link href='aviso-legal'>
                  <a className='external-link' style={{fontSize: 12}}>
                    AVISO LEGAL
                  </a>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link href='politica-de-cookies'>
                  <a className='external-link' style={{fontSize: 12}}>
                    POLÍTICA DE COOKIES
                  </a>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link href='politica-de-privacidad'>
                  <a className='external-link' style={{fontSize: 12}}>
                    POLÍTICA DE PRIVACIDAD
                  </a>
                </Link>
              </li>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='d-flex justify-content-center'>
              <img
                src='https://res.cloudinary.com/ico4etech/image/upload/v1604022199/PARAYOGA.LIFE/Pay_Methods_jkcxuo.png'
                className='img-fluid img-thumbnail'
                alt='Metodo de pago'
                loading='lazy'
                width='330'
                height='40'
              />
            </div>
            <div className='d-flex justify-content-center'>
              <p className='pt-2 pay-platform'>
                Utilizamos la plataforma de pago seguro de{' '}
                <strong>Amazon.es</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Esterilla() {
  return (
    <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
      <div className='card' style={{width: '18rem'}}>
        <Link href='/esterilla-para-yoga'>
          <a rel='dofollow'>
            <Image
              src='https://res.cloudinary.com/ico4etech/image/upload/v1604267070/PARAYOGA.LIFE/Esterillas/esterilla1_xkagnz.png'
              alt='Esterilla para yoga'
              className='card-img-top pt-2 px-2 card-image-300h'
              width={300}
              height={300}
              loading='lazy'
            />
          </a>
        </Link>
        <div className='card-body text-center'>
          <Link href='/esterilla-para-yoga'>
            <a className='card-title' rel='dofollow'>
              Esterillas para yoga
            </a>
          </Link>
          <p className='card-text card-description'>
            Comodidad, Suavidad, Adhesion y Elasticidad. Perfecta para
            Ejercitarse.
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

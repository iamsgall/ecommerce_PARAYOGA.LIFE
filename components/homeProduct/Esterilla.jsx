import Link from 'next/link';

export default function Esterilla() {
  return (
    <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
      <div className='card' style={{width: '18rem'}}>
        <Link href='/esterilla-para-yoga'>
          <a rel='dofollow'>
            <img
              src='https://res.cloudinary.com/ico4etech/image/upload/v1603928834/PARAYOGA.LIFE/Esterillas/esterilla1_z4qr5g.jpg'
              className='card-img-top pt-2 px-2 card-image-300h'
              alt='...'
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

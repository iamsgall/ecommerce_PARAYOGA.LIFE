import Link from 'next/link';

export default function AlfombraTerciopelo() {
  return (
    <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
      <div className='card' style={{width: '18rem'}}>
        <Link href='#'>
          <a rel='dofollow'>
            <img
              src='images/alfombra-terciopelo.jpg'
              className='card-img-top pt-2 px-2 card-image-300h'
              alt='...'
            />
          </a>
        </Link>
        <div className='card-body text-center'>
          <Link href='#'>
            <a className='card-title' rel='dofollow'>
              Alfombra de Terciopelo
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

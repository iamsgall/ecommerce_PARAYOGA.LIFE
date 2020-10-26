import Link from 'next/link';

export default function Esterilla() {
  return (
    <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
      <Link href='/esterilla-para-yoga'>
        <div className='card' style={{width: '18rem'}}>
          <Link href='/esterilla-para-yoga'>
            <img
              src='images/esterilla.jpg'
              className='card-img-top pt-2 px-2 card-image-300h'
              alt='...'
            />
          </Link>
          <div className='card-body text-center'>
            <Link href='/esterilla-para-yoga'>
              <a className='card-title'>Esterillas para yoga</a>
            </Link>
            <p className='card-text card-description'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </Link>

      <style jsx>
        {`
          .card:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function EsterillasProducts({
  invisible,
  image,
  title,
  previous_price,
  current_price,
}) {
  return (
    <>
      <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
        <Link href='/esterilla-para-yoga'>
          <div className='card' style={{width: '18rem'}}>
            {invisible ? (
              <div className='populate'>
                <p className='text-right mr-3 mt-3'>
                  <span
                    className='p-1'
                    style={{
                      color: '#212529',
                      background: '#ffb300e7',
                      fontWeight: 'bold',
                      borderRadius: 4,
                    }}
                  >
                    Más Popular
                  </span>
                </p>
              </div>
            ) : (
              <div className='populate invisible'>
                <p className='text-right mr-3 mt-3'>
                  <span
                    className='p-1 '
                    style={{
                      color: '#212529',
                      background: '#ffb300e7',
                      fontWeight: 'bold',
                      borderRadius: 4,
                    }}
                  >
                    Más Popular
                  </span>
                </p>
              </div>
            )}
            <Link href='/esterilla-para-yoga'>
              <img
                src={`images/${image}.jpg`}
                className='card-img-top pt-2 px-2 card-image-300h'
                alt='...'
              />
            </Link>
            <span
              className='text-center mt-3'
              style={{fontSize: 14, color: '#17a2b8'}}
            >
              <FontAwesomeIcon
                icon='images'
                className='mr-1'
                style={{color: '#17a2b8'}}
              />
              Ver Galería
            </span>
            <hr />
            <div className='card-body text-center' style={{padding: 10}}>
              <div className='row'>
                <div className='col-6'>
                  <div className='card-text text-center'>
                    <Link href='/esterilla-para-yoga'>
                      <a
                        className='link-title'
                        style={{textDecoration: 'none', color: '#212529'}}
                      >
                        {title}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <div className='card-text text-center  p-1'>
                    <small className='previous_price'>
                      <s>{previous_price} EUR</s>
                    </small>
                    <br />
                    <span className='current_price' style={{color: '#b12704'}}>
                      {current_price} EUR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <style jsx>
        {`
          .card:hover {
            cursor: pointer;
          }
          .price {
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}

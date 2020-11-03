import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function EsterillasProducts({
  invisible,
  image,
  title,
  previous_price,
  current_price,
  url,
}) {
  return (
    <>
      <div className='col-sm-12 col-md-4 my-3 d-flex justify-content-center'>
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
          <a href={`${url}`} target='_blank' rel='nofollow'>
            <Image
              src={`${image}`}
              className='card-img-top pt-2 px-2 card-image-300h'
              alt={title}
              width={300}
              height={300}
              loading='lazy'
            />
          </a>
          <span
            className='text-center mt-3'
            style={{fontSize: 14, color: '#17a2b8'}}
          >
            <a href={`${url}`} target='_blank' rel='nofollow'>
              <FontAwesomeIcon
                icon='images'
                className='mr-1'
                style={{color: '#17a2b8'}}
              />
              Ver Galería
            </a>
          </span>
          <hr />
          <a
            href={`${url}`}
            target='_blank'
            rel='nofollow'
            className='link-title'
            style={{textDecoration: 'none', color: '#212529'}}
          >
            <div className='card-body text-center' style={{padding: 10}}>
              <div className='row'>
                <div className='col-6'>
                  <div className='card-text text-center'>{title}</div>
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
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .price {
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}

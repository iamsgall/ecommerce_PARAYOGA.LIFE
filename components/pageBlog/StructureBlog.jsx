import React from 'react';
import {format} from 'timeago.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function StructureBlog({
  url,
  image,
  alt,
  title,
  description,
  date,
}) {
  return (
    <article className='col-sm-12 col-md-6'>
      <Link href={url}>
        <a rel='dofollow' className='card-blog'>
          <div
            className='card mb-3'
            style={{
              maxWidth: 540,
            }}
          >
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img
                  className='card-img img-fluid'
                  alt={alt}
                  src={image}
                  style={{
                    height: '100%',
                  }}
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h3
                    className='card-title'
                    style={{
                      fontSize: 20,
                    }}
                  >
                    {title}
                  </h3>
                  <p className='card-text p-intro'>
                    {description}
                    <span className='pl-2'>
                      <FontAwesomeIcon icon='long-arrow-alt-right' />
                    </span>
                  </p>
                  <p className='card-text p-intro'>
                    <small className='text-muted'>
                      {`Last updated: ${format(date)}`}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}

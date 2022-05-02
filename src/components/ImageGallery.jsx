import React from 'react';
import { ImageList } from '../styles';

import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images, onImgClick }) {
  return (
    <ImageList>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          onSelect={onImgClick}
          largeImageURL={largeImageURL}
          image={webformatURL}
        />
      ))}
    </ImageList>
  );
}

export default ImageGallery;
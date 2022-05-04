import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageList } from '../styles';


export default function ImageGallery({ images, onImgClick }) {
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
};
import React from 'react';
import { ImageListItem, Image } from '../styles';

export default function ImageGalleryItem ({ image, tags, onSelect, largeImageURL })  {
  return (
    <>
      <ImageListItem>
        <Image src={image} alt={tags} onClick={() => onSelect(largeImageURL)} />
      </ImageListItem>
    </>
  );
};
import React from 'react';
import { ImageListItem, Image } from '../styles';

const ImageGalleryItem = ({ image, tags, onSelect, largeImageURL }) => {
  return (
    <>
      <ImageListItem>
        <Image src={image} alt={tags} onClick={() => onSelect(largeImageURL)} />
      </ImageListItem>
    </>
  );
};

export default ImageGalleryItem;
import React from 'react';
import { Load } from '../styles';

export default function Button({ onClick }) {
  return (
    <Load type="button" onClick={onClick}>
      Load more
    </Load>
  );
}
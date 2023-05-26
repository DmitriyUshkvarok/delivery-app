import React from 'react';
import { StyleContainer } from './Container.styled';

const Container = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;

import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: #00124f;
`;

type Props = {
  title: string;
};

const Title = ({ title }: Props) => <Header>{title}</Header>;

export default Title;

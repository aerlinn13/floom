import { IFlower } from '@/typings';
import React from 'react';
import styled from 'styled-components';

import FlowerListItem from './FlowerListItem';

const Header = styled.h2``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

type Props = {
  flowers: IFlower[];
};

const FlowerList = ({ flowers }: Props) => (
  <>
    <Header>Flowers</Header>
    <Container>
      {flowers.map((flower) => (
        <FlowerListItem flower={flower} />
      ))}
    </Container>
  </>
);

export default FlowerList;

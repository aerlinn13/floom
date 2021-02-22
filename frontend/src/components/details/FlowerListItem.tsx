import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IFlower, ISKU } from '@/typings';
import WholesaleList from './WholesaleList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 80px;
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 3px;
  background-color: white;
  box-shadow: 6px 6px 25px 1px rgba(230, 230, 230, 0.3);
  margin-right: 20px;
`;

const ImagePlaceholder = styled.div`
  height: 100%;
  width: 60px;
  background-color: #00124f;
`;

const Name = styled.p`
  padding-left: 10px;
  color: #00124f;
`;

type Props = {
  flower: IFlower;
};

const FlowerListItem = ({ flower }: Props) => {
  const [skus, setSKUs] = useState<ISKU[] | null>(null);
  // very non-optimal solution, see Readme
  useEffect(() => {
    axios
      .get(`http://localhost:8080/wholesales/${flower.name}`)
      .then((response) => {
        setSKUs(response.data);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImagePlaceholder />
        <Name>{`${flower.color} ${flower.name}`}</Name>
      </Wrapper>
      <WholesaleList skus={skus} />
    </Container>
  );
};

export default FlowerListItem;

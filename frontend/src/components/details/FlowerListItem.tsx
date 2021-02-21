import { IFlower } from '@/typings';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  width: 240px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 3px;
  background-color: white;
  box-shadow: 6px 6px 25px 1px rgba(230, 230, 230, 0.3);
  margin-right: 10px;
`;

const ImagePlaceholder = styled.div`
  height: 60px;
  width: 60px;
  background-color: lightgray;
`;

const Name = styled.p`
  padding-left: 10px;
  color: #00124f;
`;

type Props = {
  flower: IFlower;
};

const FlowerListItem = ({ flower }: Props) => (
  <Wrapper>
    <ImagePlaceholder />
    <Name>{`${flower.color} ${flower.name}`}</Name>
  </Wrapper>
);

export default FlowerListItem;

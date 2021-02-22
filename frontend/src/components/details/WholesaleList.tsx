import React from 'react';
import styled from 'styled-components';
import { ISKU } from '@/typings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 120px;
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 3px;
  background-color: white;
  box-shadow: 6px 6px 25px 1px rgba(230, 230, 230, 0.3);
  margin-right: 10px;
  margin-top: 20px;
`;

const ImagePlaceholder = styled.div`
  height: 100%;
  width: 60px;
  background-color: lightgray;
`;

const Title = styled.div`
  padding-left: 10px;
  color: gray;
`;

const Source = styled.div`
  padding-left: 10px;
  font-size: 14px;
  color: red;
`;

const Content = styled(Title)`
  font-size: 12px;
`;

type Props = {
  skus: ISKU[] | null;
};

const WholesaleList = ({ skus }: Props) => (
  <Container>
    {skus?.map((sku) => (
      <Wrapper>
        <ImagePlaceholder />
        <Container>
          <Title>{sku.title || sku.cultivar}</Title>
          <Source>{`Wholesaler: ${sku.source}`}</Source>
          {sku.size && <Content>{`Size: ${sku.size}`}</Content>}
          {sku.maturity && <Content>{`Maturity: ${sku.maturity}`}</Content>}
          {sku.color && <Content>{`Color: ${sku.color}`}</Content>}
          {sku.grower && <Content>{`Grower: ${sku.grower}`}</Content>}
        </Container>
      </Wrapper>
    ))}
  </Container>
);

export default WholesaleList;

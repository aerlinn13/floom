import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '../../static/styles/typography.css';

const GlobalStyle = createGlobalStyle`
    body {
    background-color: #fafaf2;
    font-family: 'Rozanova';
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>{children}</Container>
  </>
);

export default Layout;

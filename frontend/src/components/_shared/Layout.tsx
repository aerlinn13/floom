import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '../../static/styles/typography.css';

const GlobalStyle = createGlobalStyle`
    body {
    background-color: #fafaf2;
    font-family: 'Rozanova';
    }
`;

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;

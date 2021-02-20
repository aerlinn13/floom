import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    border-color: #00124f;
  }
`;

type Props = {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
};

const SearchForm = ({ value, onChange, placeholder }: Props) => (
  <Input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

export default SearchForm;

import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
	width: 100px;
	height: 50px;
	border-radius: 5px;
	padding: 10px;
	box-sizing: border-box;
	margin-right: 10px;
`;

type Props = {
	onChange: (text: string) => void;
};

const SearchTypeSelect = ({ onChange }: Props) => {
	return (
		<Select onChange={(e) => onChange(e.target.value)} defaultValue="product">
			<option value="product">Product</option>
			<option value="flower">Flower</option>
		</Select>
	);
};

export default SearchTypeSelect;

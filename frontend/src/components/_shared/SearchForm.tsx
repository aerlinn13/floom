import React from 'react';
import styled from 'styled-components';
import SearchTypeSelect from './SearchTypeSelect';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

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
	onChangeSearchType: (text: string) => void;
	placeholder: string;
};

const SearchForm = ({ value, onChange, onChangeSearchType, placeholder }: Props) => (
	<Wrapper>
		<SearchTypeSelect onChange={onChangeSearchType} />
		<Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
	</Wrapper>
);

export default SearchForm;

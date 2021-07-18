import React from 'react';
// Styles
import { Wrapper } from '../HeroImage/HeroImage.styles';

const Button = ({ text, callback }) => (
	<Wrapper type='button' onClick={callback}>
		{text}
	</Wrapper>
);

export default Button;

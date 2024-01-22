import React from 'react';
import scss from './Input.module.scss';

const Inputs = ({ placeholder }) => {
	return (
		<input
			className={scss.inputNew}
			placeholder={placeholder}
		/>
	);
};

export default Inputs;

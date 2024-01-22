import React from 'react';
import scss from '../Style.module.scss';
import Inputs from '../../ui/Inputs/Inputs';
import ButtonBG from '../../ui/buttons/ButtonBG';

const JoinHydra = () => {
	return (
		<div className={scss.mainJoin}>
			<div className={scss.cardInput}>
				<div className={scss.placeholderInput}>
					<h2> JOIN HYDRA</h2>
					<hr />
					<h1>Let’s Build Your VR Experience</h1>
				</div>
				<div className={scss.containercard}>
					<div className={scss.input}>
						<Inputs placeholder="First Name" />
						<Inputs placeholder="inputName" />
					</div>
					<div className={scss.input}>
						<Inputs placeholder="Email" />
						<Inputs placeholder="Phone Number" />
					</div>
					<div className={scss.subject}>
						<Inputs placeholder="Subject" />
					</div>
					<textarea className={scss.textarea}></textarea>
				</div>
				<ButtonBG>SEND TO HYDRA</ButtonBG>
			</div>
		</div>
	);
};

export default JoinHydra;

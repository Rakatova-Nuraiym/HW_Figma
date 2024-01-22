import React from 'react';

import scss from '../Style.module.scss';
import lastPthoto from '../../../assets/images/last-photo.png';
import smallDown from '../../../assets/icons/chevron-small-down.svg';
import secondTitle from '../../../assets/images/hydra-tech-1.png';
import thirdTitle from '../../../assets/images/hydra-tech-2.png';
import forthTitle from '../../../assets/images/hydra-tech-3.png';
import fifththTitle from '../../../assets/images/hydra-tech-4.png';

const TECHNOLOGIES = () => {
	return (
		<div className={scss.mainDiv}>
			<div className={scss.Tecnologies}>
				<div className={scss.lastPthotoTitle}>
					<div className={scss.lastTitle}>
						<h1 className={scss.firstTitle}>TECHNOLOGIES & HARDWARE</h1>
						<h1 className={scss.secondTitle}>USED BY HYDRA VR.</h1>
					</div>
					<img className={scss.img} src={lastPthoto} alt="" />
					<div className={scss.img2}>
						<img src={smallDown} alt="" />
					</div>
				</div>
			</div>
			<div className={scss.images}>
				<img src={secondTitle} alt="" />
				<img src={thirdTitle} alt="" />
				<img src={forthTitle} alt="" />
				<img src={fifththTitle} alt="" />
			</div>
			

		</div>
	);
};

export default TECHNOLOGIES;

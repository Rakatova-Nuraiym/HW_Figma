import React from 'react';
import ButtonBG from '../../ui/buttons/ButtonBG';
import girlPhoto from '../../../assets/images/girl-photo.png';
import down from '../../../assets/smooth-line-top.png';
import arrow from '../../../assets/icons/arrow-small-right.svg';
import location from '../../../assets/icons/location.svg';
import phoneCall from '../../../assets/icons/phone-call.svg';
import mail from '../../../assets/icons/mail.svg';

import scss from '../Style.module.scss';

const DiveIntoDev = () => {
	return (
		<div className={scss.allDive}>
			<div className={scss.diveInto}>
				<div className={scss.deviText}>
					<div>
						<h1>Dive Into The Depths</h1>
						<h1>Of Virtual Reality</h1>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
						Lectus mauris eros in vitae .
					</p>

					<div className={scss.img}>
						<ButtonBG>BUILD YOUR WORLD</ButtonBG>
						<img src={arrow} alt="" />
					</div>
					<img src="" alt="" />
				</div>

				<div>
					<img src={girlPhoto} alt="" />
				</div>
			</div>
			<div className={scss.longButton}>
				<div className={scss.smaalButtom}>
					<img src={location} alt="" />
					<div>
						<h3>Pay Us a Visit</h3>
						<p>Union St, Seattle, WA 98101, United States</p>
					</div>
					<img className={scss.down} src={down} alt="" />
				</div>
				<div className={scss.smaalButtom}>
					<img src={phoneCall} alt="" />
					<div>
						<h3>Give Us a Call</h3>
						<p>(110) 1111-1010</p>
					</div>
					<img className={scss.down} src={down} alt="" />
				</div>
				<div className={scss.smaalButtom}>
					<img src={mail} alt="" />
					<div>
						<h3>Send Us a Message</h3>
						<p>Contact@HydraVTech.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiveIntoDev;

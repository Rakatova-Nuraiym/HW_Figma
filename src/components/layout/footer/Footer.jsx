import React from 'react';
import scss from './Footer.module.scss';
import logo from '../../../assets/logo.png';
import smooz from '../../../assets/smooth-line-top.png';
import fecebook from '../../../assets/images/facebook.svg';
import twitter from '../../../assets/images/twitter.png';
import lincedin from '../../../assets/images/linkedin.png';
import youtube from '../../../assets/images/youtube.png';
import pinterest from '../../../assets/images/pinterest.png';
import instagramm from '../../../assets/images/instagram.png';
import vector from '../../../assets/images/Vector 17.png';
import ButtonBG from '../../ui/buttons/ButtonBG';

const Footer = () => {
	return (
		<>
			<footer className={scss.footer}>
				<div>
					<div className={scss.footerDiv}>
						<div>
							<img className={scss.logo} src={logo} alt="" />
						</div>
						<img className={scss.smooz} src={smooz} alt="" />

						<div className={scss.footertrext}>
							<p>ABOUT </p>
							<p>SERVICES </p>
							<p>TECHNOLOGIES</p>
							<p>HOW TO</p>
							<p> JOIN HYDRA</p>
						</div>
						<img className={scss.smooz} src={smooz} alt="" />

						<div className={scss.footertrext}>
							<p>F.A.Q </p>
							<p>SITEMAP </p>
							<p>CONDITIONS</p>
							<p>LICENSES</p>
						</div>
						<img className={scss.smooz} src={smooz} alt="" />

						<div className={scss.footertrext}>
							<p>SOCIALIZE WITH HYDRA </p>
							<div className={scss.social}>
								<img src={fecebook} alt="" />
								<img src={twitter} alt="" />
								<img src={lincedin} alt="" />
								<img src={youtube} alt="" />
								<img src={instagramm} alt="" />
								<img src={pinterest} alt="" />
							</div>
							<ButtonBG>BUILD YOUR WORLD </ButtonBG>
						</div>
					</div>

					<div className={scss.lastFooter}>
						<img src={vector} alt="" />
						<p>
							2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
							RESERVED{' '}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;

import React from 'react';
import arrow from '../../../assets/icons/arrow-right.svg';
import person from '../../../assets/images/man-photo.png';

import scss from '../Style.module.scss';

import ButtonBG from '../../ui/buttons/ButtonBG.jsx';

const Introdaction = () => {
	return (
		<div>
			<div className={scss.allIntro}>
				<div className={scss.textIntro}>
					<div className={scss.introdaction}>
						<div className={scss.text1}>
							<h2>INTRODUCTION</h2>
							<div className={scss.textImg}>
								<p>TO HYDRA VR</p>
								<img src={arrow} alt="" />
							</div>
						</div>
					</div>
					<div className={scss.text}>
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
				</div>
				<div className={scss.menDiv}>
					<div>
						<img src={person} alt="" />
					</div>
					<div className={scss.mentext}>
						<div className={scss.mentilte}>
							<div className={scss.about}>
								<h1>ABOUT</h1>
								<p>HYDRA VR</p>
							</div>
							<p>
								Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
								mattis rhoncus urna neque viverra justo. Vivamus at augue eget
								arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
								Aenean et tortor at risus viverra adipiscing at in. Mattis
								aliquam faucibus purus in massa. Est placerat in egestas erat
								imperdiet sed. Consequat semper viverra nam libero justo laoreet
								sit amet. Aliquam etiam erat velit scelerisque in dictum non
								consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
								ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
								nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
								tempor.
							</p>

						</div>
							<ButtonBG className={scss.button}>LET’S GET IN TOUCH</ButtonBG>
					</div>
				</div>
				<div className={scss.textIntro}>
					<div className={scss.introdaction}>
						<div className={scss.text1}>
							<h2>WHY BUILD</h2>
							<div className={scss.textImg}>
								<p>WITH HYDRA?</p>
								<img src={arrow} alt="" />
							</div>
						</div>
					</div>
					<div className={scss.text}>
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introdaction;

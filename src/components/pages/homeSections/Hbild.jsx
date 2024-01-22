import React from 'react';
import arrow from '../../../assets/icons/arrow-right.svg';
import arrowsmall from '../../../assets/icons/arrow-small-right.svg';
import scss from '../Style.module.scss';

const Hbild = () => {
	return (
		<div>
			<div className={scss.allHbild}>
				<div className={scss.mainIntro}>
					<div className={scss.introdaction}>
						<div className={scss.text1}>
							<h2>HOW WE BUILD</h2>
							<div className={scss.textImg}>
								<p>WITH HYDRA VR?</p>
								<img  src={arrow} alt="" />
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
				<div className={scss.cercleDiv}>
					<div className={scss.curcle}>
						<h1>01</h1>
					</div>
					<div className={scss.curcle}>
						<h1>02</h1>
					</div>
					<div className={scss.curcle}>
						<h1>03</h1>
					</div>
					<div className={scss.curcle}>
						<h1>04</h1>
					</div>
				</div>
				<div className={scss.cercleText}>
					<img src={arrowsmall} alt="" />
					<h1>3D Conception & Design</h1>
					<img src={arrowsmall} alt="" />
					<h1>3D Conception & Design</h1>
					<img src={arrowsmall} alt="" />
					<h1>3D Conception & Design</h1>
					<img src={arrowsmall} alt="" />
					<h1>3D Conception & Design</h1>
				</div>
			</div>
		</div>
	);
};

export default Hbild;

import React from 'react';
import WhyBuild from './homeSections/WhyBuild';
import scss from './Style.module.scss';
import JoinHydra from './homeSections/JoinHydra';
import DiveIntoDev from './homeSections/DiveInto';
import Introdaction from './homeSections/Introdaction';
import TECHNOLOGIES from './homeSections/TECHNOLOGIES';
import Hbild from './homeSections/Hbild';


const HomePage = () => {
	return (
		<>
			<div className={scss.all}>
				<DiveIntoDev/>
				<Introdaction/>
				<WhyBuild />
				<TECHNOLOGIES/>
				<Hbild/>
				<JoinHydra />
	
			</div>
		</>
	);
};
export default HomePage;

import React from 'react'
import FooterNavigation from './footer navigation/FooterNavigation';
import classes from './footer.module.scss';

const Footer = () => {
    return (
		<div className='row'>
			<footer className={`${classes['footer']}`}>
				<div className={`${classes['wrapper']}`}>
					<div className={`${classes['image-wrapper']}`}>
						<img
							src='logoFooter.png'
							alt='Little Lemon'
							width='100'
							className={`${classes['img']}`}
						/>
					</div>
					<FooterNavigation />
				</div>
			</footer>
		</div>
	);
}

export default Footer;
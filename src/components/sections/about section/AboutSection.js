import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './about-section.module.scss';


const AboutSection = () => {
  return (
		<section
			id='about'
			className={`${styles['about-section']}`}>
			<div className={`${styles['about-section__block-container']}`}>
				<div className={`${styles['about-section__inner-container']} `}>
					<div className={`${styles['about-section__content-block']}`}>
						<h2 className={`${styles['about-section__heading']}`}>Little Lemon</h2>
						<h3 className={`${styles['about-section__sub-heading']}`}>Chicago</h3>
						<p className={`${styles['about-section__content']}`}>
							Little Lemon is a restaurant located in Chicago, IL that serves a
							combination of Greek and Italian style food. The restaurant has received
							top ratings for its delicious food. Diners can enjoy classic
							Mediterranean dishes with a modern twist at Little Lemon.
						</p>
						<p className={`${styles['about-section__content']}`}>
							The atmosphere at Little Lemon is warm and welcoming, with a cozy dining
							room and friendly staff. The restaurant has a rustic feel, with exposed
							brick walls and a Mediterranean-inspired decor. Little Lemon is a great
							choice for a romantic dinner or a casual meal with friends.
						</p>
						<p className={`${styles['about-section__content']}`}>
							The menu at Little Lemon features a variety of dishes, including
							traditional Greek favorites like spanakopita and moussaka, as well as
							Italian classics like pasta and risotto. The restaurant also offers a
							selection of seafood and meat dishes, all made with fresh, high-quality
							ingredients. Diners can also enjoy a glass of wine from Little Lemon's
							extensive wine list, which features a variety of Mediterranean wines.
						</p>
					</div>
					<div className={`${styles['hero__image-wrapper']}`}>
						<img
							src={require('../../../images/restaurantChefB.jpg')}
							className={`${styles['image2']}`}
							alt='food on a platter'
						/>
						<img
							src={require('../../../images/restaurant.jpg')}
							alt='food on a platter'
						/>
					</div>
				</div>
			</div>
		</section>
  );
}

export default AboutSection;
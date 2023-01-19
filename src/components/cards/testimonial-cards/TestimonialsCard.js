import React from 'react';
import styles from './testimonials-card.module.scss';

const testimonialsCard = () => {
  return (
		<>
			<div className={`${styles['testimonials-card']}`}>
				<h3 className={`${styles['testimonials-card__name']}`}>Mike Smith</h3>
				<div className={`${styles['testimonials-card__ratings-block']}`}>
					<figure className={`${styles['ratings-block__image-wrapper']}`}>
						<img
							src={require('../../../images/male1.png')}
							alt='food on a platter'
						/>
					</figure>
					<div className={`${styles['ratings-block__rating']}`}> ⭐ ⭐ ⭐ ⭐ </div>
				</div>
				<div className={`${styles['ratings-block__review']}`}>
					<p>"Wow, the food was amazing! Best Greek food in town."</p>
				</div>
			</div>
		</>
  );
}

export default testimonialsCard
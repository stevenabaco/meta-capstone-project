import React from 'react';
import styles from './testimonials-card.module.scss';

const testimonialsCard = (props) => {
	const { name, avatar, comment } = props;
  return (
		<>
			<div className={`${styles['testimonials-card']}`}>
				<h3 className={`${styles['testimonials-card__name']}`}>{name}</h3>
				<div className={`${styles['testimonials-card__ratings-block']}`}>
					<figure className={`${styles['ratings-block__image-wrapper']}`}>
						<img
							src={avatar}
							alt='food on a platter'
						/>
					</figure>
					<div className={`${styles['ratings-block__rating']}`}> ⭐ ⭐ ⭐ ⭐ </div>
				</div>
				<div className={`${styles['ratings-block__review']}`}>
				  <p>{comment}</p>
				</div>
			</div>
		</>
  );
}

export default testimonialsCard
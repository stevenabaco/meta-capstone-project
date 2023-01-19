import React from 'react';
import styles from './highlights-card.module.scss';

const HighlightsCard = () => {
    return (
		<>
			<div className={`${styles['highlights-card']}`}>
				<figure className={`${styles['highlights-card__image-wrapper']}`}>
					<img
						src={require('../../../images/greekSalad.jpg')}
						alt='food on a platter'
					/>
				</figure>
				<div className={`${styles['highlights-card__content']}`}>
					<div className={`${styles['highlights-card__content-header']}`}>
						<span className={`${styles['highlights-card__title']}`}>Greek salad</span>
						<span className={`${styles['highlights-card__price']}`}>$ 12.99</span>
					</div>
					<p>
						The famous greek salad of crispy lettuce, peppers, olives and our Chicago
						style feta cheese, garnished with crunchy garlic and rosemary croutons.
					</p>
					<div className={`${styles['highlights-card__content-footer']}`}>
						<span className={`${styles['highlights-card__title']}`}>Order a delivery</span>
						<span className={`${styles['highlights-card__price']}`}>$5</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default HighlightsCard
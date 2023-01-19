import React from 'react';
import styles from './highlights-card.module.scss';

const HighlightsCard = (props) => {
    const { image, title, price, content } = props;

    return (
		<>
			<div className={`${styles['highlights-card']}`}>
				<figure className={`${styles['highlights-card__image-wrapper']}`}>
					<img
						src={image}
						alt='food on a platter'
					/>
				</figure>
				<div className={`${styles['highlights-card__content']}`}>
					<div className={`${styles['highlights-card__content-header']}`}>
						<span className={`${styles['highlights-card__title']}`}>{title}</span>
						<span className={`${styles['highlights-card__price']}`}>{price}</span>
					</div>
					<p>{content}</p>
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
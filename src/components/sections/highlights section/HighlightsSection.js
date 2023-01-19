import React from 'react';
import styles from './highlights-section.module.scss';
import HighlightsCard from '../../cards/highlilghts-card/HighlightsCard';
import { NavLink } from 'react-router-dom';

const HighlightsSection = () => {
    return (
		<div className={`${styles['highlights__block-row']}`}>
			<section
				id='highlights'
				className={`${styles['highlights']}`}>
				<div className={`${styles['highlights__container']}`}>
					<div className={`${styles['highlights__header']}`}>
						<h2 className={`${styles['highlights__heading']}`}>This weeks Specials!</h2>
						<NavLink to='/reserve-table'>
							<button className={`${styles['button']}`}>Order Online</button>
						</NavLink>
					</div>
					<div className={`${styles['highlights__inner-block']}`}>
						<HighlightsCard />
						<HighlightsCard />
						<HighlightsCard />
					</div>
				</div>
			</section>
		</div>
	);
}

export default HighlightsSection;
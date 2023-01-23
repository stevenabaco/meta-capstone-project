import React from 'react';
import styles from './highlights-section.module.scss';
import HighlightsCard from '../../cards/highlilghts-card/HighlightsCard';
import greekSaladImage from '../../../images/greekSalad.jpg';
import bruchettaImage from '../../../images/bruchetta.svg';
import lemonPie from '../../../images/lemon-dessert.jpg'
import { NavLink } from 'react-router-dom';

const HighlightsSection = () => {
    return (
		<div className={`${styles['highlights__block-row']}`}>
            <section
                aria-label="Highlights Section"
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
						<HighlightsCard
							image={greekSaladImage}
							title='Greek Salad'
							price='$ 12.99'
							content='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
						/>
						<HighlightsCard
							image={bruchettaImage}
							title='Bruchetta'
							price='$ 5.99'
							content='Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
						/>
						<HighlightsCard
							image={lemonPie}
							title='Lemon Dessert'
							price='$ 8.99'
							content='Tjos comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HighlightsSection;
import React from 'react';
import styles from './testimonials-section.module.scss';
import TestimonialsCard from '../../cards/testimonial-cards/TestimonialsCard';
import avatar1 from '../../../images/male1.png';
import avatar2 from '../../../images/female1.png';
import avatar3 from '../../../images/male2.png';
import avatar4 from '../../../images/female2.png';
import { NavLink } from 'react-router-dom';

const TestimonialsSection = () => {
  return (
		<section
			id='testimonials'
			className={`${styles['testimonials']}`}>
			<div className={`${styles['highlights__container']}`}>
				<div className={`${styles['highlights__inner-block']}`}>
					<TestimonialsCard
						name='Mike Smith'
						avatar={avatar1}
						comment='Wow, the food was amazing! Best Greek food in town!'
					/>
					<TestimonialsCard
						name='Jane Adams'
						avatar={avatar2}
						comment='Little Lemon is a fantastic restaurant, with delicious food and great service.'
					/>
					<TestimonialsCard
						name='Richard Ritch'
						avatar={avatar3}
						comment='The flavors at Little Lemon were spot on, and the ambiance was cozy and inviting. Highly recommend!'
					/>
					<TestimonialsCard
						name='Lisa Lemon'
						avatar={avatar4}
						comment='I had a fantastic dining experience at Little Lemon, the food was delicious and service was excellent.'
					/>
				</div>
			</div>
		</section>
  );
}

export default TestimonialsSection;
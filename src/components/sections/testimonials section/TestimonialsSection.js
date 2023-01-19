import React from 'react';
import styles from './testimonials-section.module.scss';
import TestimonialsCard from '../../cards/testimonial-cards/TestimonialsCard';
import { NavLink } from 'react-router-dom';

const TestimonialsSection = () => {
  return (
		
			<section
				id='testimonials'
				className={`${styles['testimonials']}`}>
				<div className={`${styles['highlights__container']}`}>
					<div className={`${styles['highlights__inner-block']}`}>
						<TestimonialsCard />
						<TestimonialsCard />
						<TestimonialsCard />
						<TestimonialsCard />
					</div>
				</div>
			</section>

  );
}

export default TestimonialsSection;
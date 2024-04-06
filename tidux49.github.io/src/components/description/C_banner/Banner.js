import L_arrow from '../images/arrow_left.png';
import R_arrow from '../images/arrow_right.png';
import { useState } from "react";
import './banner_style.css';

export default function Banner({tableau, id_selected}){
    const index_description = tableau.findIndex(({ id }) => id === id_selected);
    let slides = []
    if (index_description !== -1) {
        slides = tableau[index_description].pictures;
    }
    const [current, setCurrent] = useState(0); //je définis l'index du premier slide à 0
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	if(slides.length > 1){
		return (
			<section id="carrousel-container" class="carrousel-container">
					<img src={L_arrow} alt="gauche" onClick={prevSlide} className="leftArrow"/>
					<img src={R_arrow}	alt="droite" onClick={nextSlide} className="rightArrow"	/>
				{slides.map((slide, index) => (
					<div class="image_nombre_slide" key={index}>
						{index === current && <img class="img_banner" src={slide} alt="appartement à louer" />}
											{index === current && (
												<span className="nombre_slide">
													{current + 1}/{length}
												</span>
											)}
					</div>
				))}
			</section>
		);
	}
	else{
		return (
			<section id="carrousel-container" class="carrousel-container">
				{slides.map((slide, index) => (
					<div key={index}>
						{index === current && <img class="img_banner" src={slide} alt="appartement à louer" />}
					</div>
				))}
			</section>
		);
	}

}
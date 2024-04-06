import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './etoiles_style.css'

export default function Etoiles({tableau , id_selected}){
    const index = tableau.findIndex(({ id }) => id === id_selected);
    if (index !== -1) {
        const note = tableau[index].rating;

        const stars = [];
        for (let i = 0; i < note; i++) {
        stars.push(
    <FontAwesomeIcon key={i} icon={faStar} className="full" />
  );}
         for (let l = stars.length; l<5; l++) {
        stars.push(
<FontAwesomeIcon key={l} icon={faStar} className="empty" />
);
}
        return (
                <div className="etoiles">
                  {stars}
                </div>
        );
      }
    
    }
        

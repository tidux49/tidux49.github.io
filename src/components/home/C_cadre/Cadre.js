import { Link } from 'react-router-dom';
import './cadre_style.css';


export default function Cadre({tableau}){
  const handleClick = (id) => {
    localStorage.setItem("description_number", id);
    console.log('Clic sur le lien !');
  };
    return(
        tableau.map(({cover, id, title}) => (
          <section class="cadre" key={id}>
          <Link to={`/description/${id}`} onClick={() => handleClick(id)} class ="cadre" id={id}>
          <img class="img_cadre" src={cover}></img>
          </Link>
          <h3 class="titre_cadre">{title}</h3>
          </section>
         ))
    ) }
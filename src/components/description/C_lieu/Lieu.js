import './lieu_style.css';

export default function Lieu ({tableau, id_selected}){
    const index_lieu = tableau.findIndex(({ id }) => id === id_selected);
  
    if (index_lieu !== -1) {
      return (
        <div className="location" key={`description-${index_lieu}`}>
            <h3>{tableau[index_lieu].location}</h3>
        </div>
      );
    } else {
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
}
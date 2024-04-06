import './titre_style.css';

export default function Titre ({tableau, id_selected}){
    const index_titre = tableau.findIndex(({ id }) => id === id_selected);
  
    if (index_titre !== -1) {
      return (
        <div className="titre" key={`description-${index_titre}`}>
            <h1>{tableau[index_titre].title}</h1>
        </div>
      );
    } else {
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
}
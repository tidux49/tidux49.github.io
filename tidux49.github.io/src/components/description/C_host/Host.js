import './host_style.css';

export default function Host({tableau, id_selected}){
        const index_host = tableau.findIndex(({ id }) => id === id_selected);
      
        if (index_host !== -1) {
          return (
            <div className="host" key={`description-${index_host}`}>
                <h3>{tableau[index_host].host.name}</h3>
                <img class="img_host" src={tableau[index_host].host.picture}></img>
            </div>
          );
        } else {
          console.log("Erreur");
          return null; // ou un message d'erreur à afficher dans le composant parent
        }
}
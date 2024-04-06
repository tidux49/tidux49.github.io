import './tags_style.css';

export default function Tags({tableau, id_selected}){
        const index = tableau.findIndex(({id}) => id === id_selected);
        console.log(tableau[index].id);
          
            if(index !== -1){
                return(
                    <div class="tags">
                        {tableau[index].tags.map((tag, index) => (
                        <div className="tag" key={`${tag}-${index}`}>
                         <p>{tag}</p>    
                    </div>
                            ))}                 
                    </div>)}
            else{
                }
}
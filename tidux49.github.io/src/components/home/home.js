import React from 'react'
import img_fond_index from './fond_index.png';
import tableau from './tableaux';
import Cadre from './C_cadre/Cadre';
import './home_style.css';

function Image_index(){



  return (
  <div className="img_index_container">
    <img className="image_index" src={img_fond_index}></img>
    <p className="text_img_index">Chez vous, partout et ailleur</p>
  </div>)

}

function Home(){
  return <div className="body_home">
    <Image_index />
    <section className="back_cadre">
    <div className="grille_cadre">
    <Cadre tableau={tableau} />
    </div>
    </section>
    </div>
}


export default Home;

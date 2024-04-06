import { Link } from 'react-router-dom'
import img_kasa from './home/LOGO.png';
import './liens_header_style.css';

function Liens_header(){
  return <div className="liens_header">
    <img className="image_kasa" src={img_kasa}></img>
    <div className="liens">
    <Link to="/home">Accueil</Link>
    <Link to="/a_Propos">A propos</Link>
    </div>
  </div>
}

export default Liens_header
import { Link } from "react-router-dom";
import './Erreur_Style.css';

export default function Erreur() {
	return (
		<div className="error_container">
			<p className="nombre">404</p>
			<p className="text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/home" className="error_lien">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
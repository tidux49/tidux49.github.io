import './footer_style.css';
import img_kasa_footer from './logo-footer.svg';

function Footer(){
  return (<footer>
    <img className="img_kasa_footer" src={img_kasa_footer}></img>
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>)
}

export default Footer;
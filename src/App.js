import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import Description from './components/description/description';
import A_propos from './components/a_propos/a_propos';
import Liens_header from './components/liens_header';
import Footer from './components/footer';
import Erreur from './components/erreur/Erreur';



function App() {
  return (
    <div className="App">
      <Router>
          <nav>
              <Liens_header />
          </nav>
          <Routes>
            <Route path="/description/:id" element={<Description />}/>
            <Route path="/a_propos" element={<A_propos />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/*" element={<Erreur />}/>
          </Routes>
          <nav>
          <Footer />
          </nav>
      </Router> 
    </div>
  );
}

export default App;

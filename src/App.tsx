import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login  from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Link  } from 'react-router-dom';
import Home from './paginas/home/Home';
import './App.css';



let nome = 'Lucas';
function App() {
  return (
    <Router>
      <Navbar     />
        
            <div style={{minHeight:'100vh'}}>
              <Routes>
                  <Route path="/" element={<Login />} />     
                  <Route path="/login" element={<Login />} />         
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    
               </Routes>
            </div>
        
      <Footer     />

      
    </Router>
  );
}

export default App;

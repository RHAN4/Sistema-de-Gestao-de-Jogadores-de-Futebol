import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
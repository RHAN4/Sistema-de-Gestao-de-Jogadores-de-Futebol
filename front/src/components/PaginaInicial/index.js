// src\components\PaginaInicial\index.js

import './styles.css';
import { useNavigate } from "react";
import logo from '../../assets/images/logo.png';

function PaginaInicial() {
    const navigate = useNavigate();

    const irParaCadastro = () => {
        navigate('/cadastro');
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />

            <h2>Bem-vindo ao sistema de cadastro de jogadores!</h2>
            
            <button onClick={irParaCadastro}>Cadastrar jogador</button>
            <button onClick={() => navigate('/usuarios')}>Listar jogadores</button>
        </div>
    );
}

export default PaginaInicial;
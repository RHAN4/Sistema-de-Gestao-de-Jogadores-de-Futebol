// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo.png'
import axios from 'axios'

function FormularioCadastro() {
    const formatarValorComPonto = (valor) => {
        const somenteNumeros = valor.replace(/\D/g, '');
        if (somenteNumeros.length < 3) return somenteNumeros;
    
        
        if (somenteNumeros.length === 3) {
            return `${somenteNumeros.slice(0, 1)}.${somenteNumeros.slice(1, 3)}0`;
        }
        
        
        const parteInteira = somenteNumeros.slice(0, -2);
        const parteDecimal = somenteNumeros.slice(-2);
        return `${parteInteira}.${parteDecimal}`;
    };

    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numeroCamisa, setNumeroCamisa] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {nome, genero, idade, altura, peso, posicao, numeroCamisa})
            exibirMensagem(response.data.mensagem || 'Jogador cadastrado com sucesso!', 'sucesso')
            setNome('')
            setGenero('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setNumeroCamisa('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo do time" />
            <h2>Cadastro de jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <select 
                    id="genero"
                    placeholder="Gênero"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required>
                    <option value="" disabled>Selecione o gênero</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    </select>

                <input 
                    type="idade"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
                <input 
                    type="altura"
                    id="altura"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) => {
                        const valorFormatado = formatarValorComPonto(e.target.value);
                        setAltura(valorFormatado);
                    }}
                    required
                />
                <input 
                    type="peso"
                    id="peso"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => {
                        const valorFormatado = formatarValorComPonto(e.target.value);
                        setPeso(valorFormatado);
                    }}
                    required
                />
                <input 
                    type="posicao"
                    id="posicao"
                    placeholder="Posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required
                />
                <input 
                    type="numeroCamisa"
                    id="numeroCamisa"
                    placeholder="Número da camisa"
                    value={numeroCamisa}
                    onChange={(e) => setNumeroCamisa(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                Ver jogadores cadastrados
            </button>

            
            <button onClick={() => navigate('/cadastro')} className="link-inicio">
                Pagina inicial
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro
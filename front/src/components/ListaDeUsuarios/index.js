// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8080/usuarios')
                setUsuarios(response.data)
            } catch (error) {
                alert('Erro ao buscar jogadores: ', error)
                setUsuarios([])
            }
        }
        carregarUsuarios()
    }, [])

    const generoTexto = {
        MASCULINO: "Masculino",
        FEMININO: "Feminino",
        PREFIRO_NAO_INFORMAR: "Prefiro não informar"
    };
    
    const posicaoTexto = {
        GOLEIRO: "Goleiro",
        ZAGUEIRO: "Zagueiro",
        LATERAL_ESQUERDO: "Lateral esquerdo",
        LATERAL_DIREITO: "Lateral direito",
        VOLANTE: "Volante",
        ALA_ESQUERDO: "Ala esquerdo",
        ALA_DIREITO: "Ala direito",
        MEIO_CAMPO_ESQUERDO: "Meio campo esquerdo",
        MEIO_CAMPO_DIREITO: "Meio campo direito",
        MEIA_CENTRAL: "Meia central",
        MEIA_LATERAL: "Meia lateral",
        MEIA_ATACANTE: "Meia atacante",
        PONTA: "Ponta",
        ATACANTE: "Atacante"
    };
    
    return (
        <ul id="listaUsurios" className="lista-usuarios">
            {usuarios.length === 0 ? (
                <li>Nenhum jogador encontrado.</li>
            ) : (
                usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <strong>Nome: </strong> {usuario.nome}<br />
                        <strong>Gênero: </strong> {generoTexto[usuario.genero] || usuario.genero}<br />
                        <strong>Idade: </strong> {usuario.idade}<br />
                        <strong>Altura: </strong> {usuario.altura}<br />
                        <strong>Peso: </strong> {usuario.peso}<br />
                        <strong>Posição: </strong> {posicaoTexto[usuario.posicao] || usuario.posicao}<br />
                        <strong>Número da camisa: </strong> {usuario.numeroCamisa}<br />
                    </li>
                ))
            )}
        </ul>
    );
}    

export default ListaDeUsuarios
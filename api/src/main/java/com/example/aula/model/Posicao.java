package com.example.aula.model;

public enum Posicao {
    GOLEIRO("Goleiro"),
    ZAGUEIRO("Zagueiro"),
    LATERAL_ESQUERDO("Lateral esquerdo"),
    LATERAL_DIREITO("Lateral direito"),
    VOLANTE("Volante"),
    ALA_ESQUERDO("Ala esquerdo"),
    ALA_DIREITO("Ala direito"),
    MEIO_CAMPO_ESQUERDO("Meio campo esquerdo"),
    MEIO_CAMPO_DIREITO("Meio campo direito"),
    MEIA_CENTRAL("Meia central"),
    MEIA_LATERAL("Meia lateral"),
    MEIA_ATACANTE("Meia atacante"),
    PONTA("Ponta"),
    ATACANTE("Atacante");

    private String texto;

    Posicao(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }
}

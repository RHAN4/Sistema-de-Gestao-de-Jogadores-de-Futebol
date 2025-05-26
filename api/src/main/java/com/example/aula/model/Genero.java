package com.example.aula.model;

public enum Genero {
    FEMININO("Feminino"),
    MASCULINO("Masculino"),
    PREFIRO_NAO_INFORMAR("Prefiro não informar");

    private String texto;

    Genero(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }
}
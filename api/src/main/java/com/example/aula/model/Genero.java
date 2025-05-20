package com.example.aula.model;

public enum Genero {
    FEMININO("Feminino"),
    MASCULINO("Masculino");

    private String texto;

    Genero(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }
}
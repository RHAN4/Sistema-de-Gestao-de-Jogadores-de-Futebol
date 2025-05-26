package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @Enumerated(EnumType.STRING)
    private Genero genero;

    @NotNull(message = "Idade é obrigatória.")
    private int idade;

    @NotNull(message = "Altura é obrigatória.")
    private double altura;

    @NotNull(message = "Peso é obrigatório.")
    private double peso;

    @Enumerated(EnumType.STRING)
    private Posicao posicao;

    @NotNull(message = "Número da camisa é obrigatório.")
    private int numeroCamisa;

    public Usuario() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Genero getGenero() {
        return genero;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public Posicao getPosicao() {
        return posicao;
    }

    public void setPosicao(Posicao posicao) {
        this.posicao = posicao;
    }

    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }

    @Transient
    public String getPosicaoTexto() {
        return posicao != null ? posicao.getTexto() : "";
    }

    @Transient
    public String getGeneroTexto() {
        return genero != null ? genero.getTexto() : "";
    }

    @Override
    public String toString() {
        return "Jogador: " +
                "ID: " + id +
                ", nome: '" + nome + '\'' +
                ", genero: " + (genero != null ? genero.getTexto() : "N/A") +
                ", idade: " + idade +
                ", altura: " + altura +
                ", peso: " + peso +
                ", posição: '" + (posicao != null ? posicao.getTexto() : "N/A") + '\'' +
                ", número da camisa: " + numeroCamisa;
    }
}


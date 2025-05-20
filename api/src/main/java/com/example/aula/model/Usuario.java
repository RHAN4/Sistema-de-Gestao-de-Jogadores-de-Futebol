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

    @NotBlank(message = "Posição é obrigatória.")
    private String posicao;

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

    public @NotBlank(message = "Nome é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório.") String nome) {
        this.nome = nome;
    }

    public Genero getGenero() {
        return genero;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    @NotNull(message = "Idade é obrigatória.")
    public int getIdade() {
        return idade;
    }

    public void setIdade(@NotNull(message = "Idade é obrigatória.") int idade) {
        this.idade = idade;
    }

    @NotNull(message = "Altura é obrigatória.")
    public double getAltura() {
        return altura;
    }

    public void setAltura(@NotNull(message = "Altura é obrigatória.") double altura) {
        this.altura = altura;
    }

    @NotNull(message = "Peso é obrigatório.")
    public double getPeso() {
        return peso;
    }

    public void setPeso(@NotNull(message = "Peso é obrigatório.") double peso) {
        this.peso = peso;
    }

    public @NotBlank(message = "Posição é obrigatória.") String getPosicao() {
        return posicao;
    }

    public void setPosicao(@NotBlank(message = "Posição é obrigatória.") String posicao) {
        this.posicao = posicao;
    }

    @NotNull(message = "Número da camisa é obrigatório.")
    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(@NotNull(message = "Número da camisa é obrigatório.") int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }

    @Override
    public String toString() {
        return "Jogador: " +
                "ID: " + id +
                ", nome: '" + nome + '\'' +
                ", genero: " + genero +
                ", idade: " + idade +
                ", altura: " + altura +
                ", peso: " + peso +
                ", posição: '" + posicao + '\'' +
                ", número da camisa: " + numeroCamisa;
    }
}


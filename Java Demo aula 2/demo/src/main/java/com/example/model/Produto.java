package com.example.model;

public class Produto {

    // Atributos estáticos e constantes
    public static final double DESCONTO_MAXIMO = 50.0;
    private static int totalProdutos = 0;

    // Atributos de instância
    private final int codigo;
    private String nome;
    private double preco;
    private int quantidade;

    // Construtor
    public Produto(String nome, double preco, int quantidade) {
        if (preco < 0 || quantidade < 0) {
            throw new IllegalArgumentException("Preço e quantidade não podem ser negativos.");
        }
        
        this.codigo = ++totalProdutos;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Getters e Setters
    public int getCodigo() {
        return codigo;
    }

    // Nota: setCodigo foi removido pois 'codigo' é final.

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if (preco >= 0) {
            this.preco = preco;
        }
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        }
    }

    public static int getTotalProdutos() {
        return totalProdutos;
    }

    // Métodos de Negócio
    public double calcularValorTotal() {
        return preco * quantidade;
    }

    public boolean temEstoque() {
        return quantidade > 0;
    }

    public void exibirResumo() {
        System.out.println(nome + " | R$ " + preco);
    }

    public boolean adicionarEstoque(int qtd) {
        if (qtd <= 0) return false;
        quantidade += qtd;
        return true;
    }

    public boolean removerEstoque(int qtd) {
        if (qtd <= 0 || qtd > quantidade) return false;
        quantidade -= qtd;
        return true;
    }

    public boolean aplicarDesconto(double percentual) {
        if (percentual <= 0 || percentual > DESCONTO_MAXIMO) return false;
        preco -= preco * (percentual / 100);
        return true;
    }

    public boolean aplicarDesconto(double valor, boolean fixo) {
        if (!fixo || valor <= 0 || valor > preco) return false;
        preco -= valor;
        return true;
    }
}
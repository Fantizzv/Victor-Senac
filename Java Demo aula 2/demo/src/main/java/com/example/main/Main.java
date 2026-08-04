package com.example.main;

import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

import com.example.model.Produto;

public class Main {
    public static void main(String[] args) {
    
        Produto p = new Produto("cafe", 25.0, 5);
        double total = p.calcularValorTotal();
        boolean disponivel = p.temEstoque();
        p.exibirResumo();
        p.removerEstoque(1);
        p.adicionarEstoque(2);
        p.calcularValorTotal();
        p.aplicarDesconto(30);
        
        System.out.println("total:" + total);
        System.out.println("disponível:" + disponivel);
        System.out.println("quantidade:" + p.getQuantidade());
        System.out.println("preço:" + p.getPreco());
        System.out.println("total:" + p.calcularValorTotal());


        //Adicionar na lista

        List<Produto> produtos = new ArrayList<>();
        produtos.add(new Produto( "arroz", 10.0, 3));
        produtos.add(new Produto( "feijão", 8.0, 0));
        produtos.add(new Produto( "macarrão", 5.0, 10));

        Produto produtoEncontrado = buscarPorCodigo(produtos, 3);
        System.out.println("produto encontrado: " + produtoEncontrado);
    }

    public static Produto buscarPorCodigo(List<Produto> lista, int codigo) {
        for (Produto produto : lista) {
            if (produto.getCodigo() == codigo) {
                return produto;
            }
        }
        return null;
    }
}


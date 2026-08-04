import javax.swing.*;

public class Desafio {
    public static void main(String[] args) {
        int idade = 16;

        if(idade >= 18) {
            System.out.println("Você é maior de idade.");
        } else {
            System.out.println("Você é menor de idade.");
        }
        JOptionPane.showMessageDialog(new JOptionPane(), "Você é maior de idade.");
    }
    
}
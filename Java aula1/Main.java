import javax.swing.*;

public class Main{

    public static void main(String[] args) {

        String b = "Teste de Java";
        System.out.println(b);

        Aluno aluno = new Aluno();
        
        aluno.setNome("Victor");
        aluno.setMatricula("676767");
        aluno.setIdade(67);

        JOptionPane.showMessageDialog(new JOptionPane(), "Nome: " + aluno.getNome() + "\nMatrícula: " + aluno.getMatricula() + "\nIdade: " + aluno.getIdade());
    }

}

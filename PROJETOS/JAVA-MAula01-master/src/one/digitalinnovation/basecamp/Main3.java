package one.digitalinnovation.basecamp;

public class Main3 {

    public static void main(String[] args) {

        // Retornos
        System.out.println("Exercício retornos III");

        double areaQuadrado = Quadrilatero2.area(3);
        System.out.println("Área do quadrado:" + areaQuadrado);

        double areaRetangulo = Quadrilatero2.area(5,10);
        System.out.println("Área do retângulo:" + areaRetangulo);

        double areaTrapezio = Quadrilatero2.area(7,8,9);
        System.out.println("Área do trapézio:" + areaTrapezio);

    }
}

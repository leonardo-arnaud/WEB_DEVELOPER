Orienta��o a Objetos
Este reposit�rio cont�m a atividade pr�tica do Curso "Orienta��o a Objetos", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

Atividade: Conta Banc�ria
Nesta atividade, vamos testar os conceitos de Orienta��o a Objetos simulando a cria��o de diversos tipos de contas banc�rias e opera��es dispon�veis em cada uma.

Crie a classe ContaBancaria, que possui os par�metros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os m�todos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses par�metros e ainda possua o par�metro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, fa�a com que o tipo seja 'conta corrente' por padr�o;
Crie uma classe-filha chamada ContaPoupanca que herda todos os par�metros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os par�metros de ContaBancaria;
Fa�a com que o m�todo saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
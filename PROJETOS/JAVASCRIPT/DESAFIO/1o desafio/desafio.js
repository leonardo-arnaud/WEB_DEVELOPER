















// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

q = parseInt(a / b);

r = a - b * q;

if (r < 0) {
  r += Math.abs(b);
  
  q =         ;    //escreva sua lógica aqui
}

print(q + " " + r);


const a = document

class Calculo {
	constructor(frstnbr, scndnbr) {
		
	}
}





class ContaBancaria {
	// constructor(agencia, numero, tipo) {
	constructor(agencia, numero, tipo, saldo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		// this._saldo = 0;
		this._saldo = saldo;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
			// return 'Operação negada!';

		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupan�a';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universit�ria';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Opera��o negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

// const minhaConta = new ContaCorrente(1, 211, true);
// const contaUni = new ContaUniversitaria(2, 333);
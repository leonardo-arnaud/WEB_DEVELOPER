function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os par?metros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final ser? de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'ma??',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
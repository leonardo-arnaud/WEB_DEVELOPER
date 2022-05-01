<html>

	<head>
		<title>Meu segundo site em PHP! Woohoo!</title>
		
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>  
													// como o javascript não é nativo do navegador (nem o CSS), precisamos importá-lo através dessa linha de codigo que busca nas bibliotecas (CDN)
													// chamou a versao 3.5.1 minified
		
		// 1a maneira de incluir um CSS: c/ style dentro do HEAD
		<style type="text/css">  //isso tudo aqui é um codigo CSS
			.linha {
				font-weight: bold; //fonte em negrito
				color: green; //fonte cor verde
				padding-left: 10px; //recuo à esquerda, em pixels
				line-height: 50px; //tamanho da linha (não é da fonte) em pixels
			}
		</style>
	</head>
	
	<body>
	
		<?php
			for ( $i = 0 ; $i < 10 ; $i++ ) {										   // span é uma tag html para poder usar uma classe chamada LINHA
				print( "<span class=\"linha\">Linha numero " . $i . "</span><br />");  //  "<br />" é para quebrar a linha
			}     // 2a forma de incluir o CSS: com o span dentro do PHP
		?>
		
	</body>
	
	<script type="test/javascript">  // isso tudo aqui é um codigo JAVASCRIPT;
		$(document).ready(function() {  //document.ready é bastante usado
		alert("Woohoo!"); //vai criar uma janela pop-up e segurar a finalização da pagina, esperando ela completar formularios etc; até apertar o OK
		});
	</script> //colocar esse javascript logo antes do fechamento do html!
	
</html>

// E COMO FUNCIONA?   PRIMEIRO HABILITA O PHP:  xampp-control.exe  E RODA O APACHE (START). ESPERA FICAR VERDE!
// 					  ESCREVE NO SEU BROWSER:  LOCALHOST/INDEX2.PHP
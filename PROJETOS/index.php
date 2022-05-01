<html>

	<head>
		<title>Meu primeiro site em PHP! Woohoo!</title>
	</head>
	
	<body>
	
		<?php
			for ( $i = 0 ; $i < 10 ; $i++ ) {
				print( "Linha numero " . $i . "<br />");  //  "<br />" para quebrar a linha
			}
		?>
		
	</body>
	
</html>

// E COMO FUNCIONA?   PRIMEIRO HABILITA O PHP:  xampp-control.exe  E RODA O APACHE (START). ESPERA FICAR VERDE!
// 					   ESCREVE NO SEU BROWSER:  LOCALHOST
//						COM MULTIPLOS ARQUIVOS, ESCREVE:  LOCALHOST/INDEX.PHP
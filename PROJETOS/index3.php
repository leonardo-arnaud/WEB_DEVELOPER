<html>

	<head>
		<title>Meu segundo site em PHP! Woohoo!</title>
		
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>  
		
		<style type="text/css">  
			.linha {
				font-weight: bold; 
				color: green; 
				padding-left: 10px; 
				line-height: 50px; 
			}
		</style>
	</head>
	
	<body>
	
		<?php
			for ( $i = 0 ; $i < 10 ; $i++ ) {										   
				print( "<span class=\"linha\">Linha numero " . $i . "</span><br />");  
			}     
		?>
		
	</body>
	
/* 	<script type="test/javascript">  
		$( document ).ready(function() {  
			alert("Woohoo!"); 
		});
	</script> 
	
	<script>  
		$( document ).ready(function() {});
		$( "a" ).click(function() {});
		$.ajax({
			url: "index.php",
			success: function() {}
		});
	</script>  */
	
	<script>  
		// A $( document ).ready() block.
		$( document ).ready(function() {
		// console.log( "ready!" );
		alert("Woohoo!"); 
		});
	</script> 
	
</html>

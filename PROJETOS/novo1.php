<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery demo</title>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<p>one</p>
<div><p>two</p></div>
<p>three</p>
 
<script>
$( "div > p" ).css( "border", "1px solid gray" );
</script>
 
</body>
</html>
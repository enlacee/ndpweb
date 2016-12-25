<?php
// CREAR ARRAY DE IMAGENES
// acceder por URL example
// http://local.ndp.net/feliz-navidad/?r=c4ca4238a0b923820dcc509a6f75849b

/*
* Generator array key md5
*/
/*
for ($i=1; $i < 11; $i++) {
	# code...
	echo md5($i);
	echo "<br/>";
}
*/

date_default_timezone_set('America/Lima');

$images = array(
	'c4ca4238a0b923820dcc509a6f75849b' => '1.GIF',
	'c81e728d9d4c2f636f067f89cc14862c' => '2.GIF',
	'eccbc87e4b5ce2fe28308fd9f2a7baf3' => '3.GIF',
	'a87ff679a2f3e71d9181a67b7542122c' => '4.GIF',
	'e4da3b7fbbce2345d7772b0674a318d5' => '5.GIF',
	'1679091c5a880faf6fb5e6087eb1b2dc' => '6.GIF',
	'8f14e45fceea167a5a36dedd4bea2543' => '7.GIF',
	'c9f0f895fb98ab9159f51fd0297e236d' => '8.GIF',
	'45c48cce2e2d7fbdea1afc51c7c6ad26' => '9.GIF',
	'd3d9446802a44259755d38e6d163e820' => '10.GIF'
);

if (!empty($_GET['r'])) {
	if (isset($images[$_GET['r']])) {
		$imageGif = $images[$_GET['r']];
		echo '<h1 style="font-size:20px">Ojo esto no es una plantilla, aunque paresca :) #felizNavidad</h1>';
		echo '<img src="cats/' . $imageGif . '" alt="Felíz Navidad">';
?>
<pre style="font-size: 7px">Ya son las <strong><?php echo date('h:i') ?></strong> a que hora piensas abrír el champan...!!!</pre><?php
	}
}

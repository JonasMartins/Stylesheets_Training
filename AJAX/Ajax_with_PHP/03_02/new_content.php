<?php
$var = 'new content';
// echo $var;
// return;
/* O MESMO RESULTADO DO CAPITULO ANTERIOR, COM A UNICA DIFERENÇA QUE AO INVEZ DE
SIMPLES TEXTO, TEMOS UM ARQUIVO PHP MAS QUE MANDA EXATAMANTE O MESMO TEXTO, MAS
DESTA VEZ EM FORMA DE HTML USANDO STYLE E AS TAGS QUE O HTML PERMITE */
?>

<span style="color: blue;">This is the <strong><?php echo $var; ?></strong> which has been loaded by Ajax.</span>
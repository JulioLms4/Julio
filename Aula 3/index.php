<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informa Primo</title>
    </head>
    <body>
    

        <form method="POST" action="">
            <label for="numero_primo">Verifica Numero Primo:</label>
            <input type="number" id="numero_primo" name="numero_primo" required>
            <button type="submit" name="verificar_primo"> Verificar </button>
        </form>


        <?php

            if($_SERVER['REQUEST_METHOD'] =='POST'){

                if(isset($_POST['verificar_primo'])){
                    $numero = $_POST['numero_primo'];
                    $ehPrimo = true;
                    if($numero <= 1){
                        $ehPrimo = false;
                    }else{
                        for($i = 2; $i <= sqrt($numero); $i++){
                            if( $numero % 1 == 0){
                                $ehPrimo = false;
                                break;
                            }
                        }
                    }

                    echo "O número $numero " . ($ehPrimo ? 'é primo':'não é primo');
 
                }
            }

        ?>
    </body>
</html>
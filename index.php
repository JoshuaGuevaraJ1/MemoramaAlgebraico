<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Luckiest+Guy'>
    <title>Memorama sobre álgebra</title>
</head>
<body>
    <main>
        <section class="section1">
            <div class="center-outer">
                <div class="center-inner">
                    <div class="bubbles"><h1>Memorama</h1></div>
                </div>
            </div>
            
            <table>
                <tr>
                    <td><button id="0" onclick="destapar(0)"></button></td>
                    <td><button id="1" onclick="destapar(1)"></button></td>
                    <td><button id="2" onclick="destapar(2)"></button></td>
                    <td><button id="3" onclick="destapar(3)"></button></td>
                </tr>
                <tr>
                    <td><button id="4" onclick="destapar(4)"></button></td>
                    <td><button id="5" onclick="destapar(5)"></button></td>
                    <td><button id="6" onclick="destapar(6)"></button></td>
                    <td><button id="7" onclick="destapar(7)"></button></td>
                </tr>
                <tr>
                    <td><button id="8" onclick="destapar(8)"></button></td>
                    <td><button id="9" onclick="destapar(9)"></button></td>
                    <td><button id="10" onclick="destapar(10)"></button></td>
                    <td><button id="11" onclick="destapar(11)"></button></td>
                </tr>
                <tr>
                    <td><button id="12" onclick="destapar(12)"></button></td>
                    <td><button id="13" onclick="destapar(13)"></button></td>
                    <td><button id="14" onclick="destapar(14)"></button></td>
                    <td><button id="15" onclick="destapar(15)"></button></td>
                </tr>
            </table>
        </section>
        
        <section class="section2">
            <h2 id="aciertos" class="estadisticas">Aciertos: 0  <br>Partidas ganadas: 0</h2>
            <h2 id="t-restante" class="estadisticas">Tiempo: 60 segundos</h2>
            <h2 id="movimientos" class="estadisticas">Movimientos: 0</h2>
            <div class="btReiniciar">
                <button class="reiniciar" onclick="reiniciar()">Reiniciar</button>
            </div>
        </section>
    </main>
    <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
    <script src="main.js"></script>
    <script src="animation.js"></script>
</body>
</html>
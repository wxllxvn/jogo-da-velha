const player1 = "X";
const player2 = "O";



function refreshVarEspacos(){
    var a1 = document.getElementById('a1')
    var a2 = document.getElementById('a2')
    var a3 = document.getElementById('a3')
    var b1 = document.getElementById('b1')
    var b2 = document.getElementById('b2')
    var b3 = document.getElementById('b3')
    var c1 = document.getElementById('c1')
    var c2 = document.getElementById('c2')
    var c3 = document.getElementById('c3')
}



var playtime = player1;
this.gameover = false;


function verificarEspacos(){
    var testEspaco = document.getElementsByClassName("espaco")
    for (var i = 0; i < testEspaco.length; i++){
        if(testEspaco[i].dataset.jogada != ""){
            var lgc = true
        }else{
            return false
        }
    }
    return lgc
}

function refreshTabuleiro(){


    if (playtime == player1){
        var player = document.getElementById("jodador-da-vez");
        player.setAttribute("src", "imagens/x.png");
    } else{
        var player = document.getElementById("jodador-da-vez");
        player.setAttribute("src", "imagens/Círculo.png");

    }
}


function logicaJogo(){
     if(a1.getAttribute('data-jogada') === b1.getAttribute('data-jogada') && b1.getAttribute('data-jogada') === c1.getAttribute('data-jogada') && a1.getAttribute('data-jogada'), b1.getAttribute('data-jogada'), c1.getAttribute('data-jogada') != ''){
         console.log(playtime)
         return
     }
     if(a2.getAttribute('data-jogada') == b2.getAttribute('data-jogada') && b2.getAttribute('data-jogada') == c2.getAttribute('data-jogada') && a2.getAttribute('data-jogada') == c2.getAttribute('data-jogada') && a2.getAttribute('data-jogada'), b2.getAttribute('data-jogada'), c2.getAttribute('data-jogada') != ''){
        console.log(playtime)
        return
     }
}

function iniciarEspaco(){
    var espacos = document.getElementsByClassName("espaco") 
    console.log(espacos)
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener('click', function(){
            if (verificarEspacos()){

                alert('acabou o jogo')
                return;
            }

            if(this.getElementsByTagName("img").length == 0){

                if (playtime == player1){

                    this.innerHTML="<img src='imagens/x.png' class='img-jogada'>"
                    //this.setAttribute("jogada", player1)
                    this.dataset.jogada = player1
                    playtime = player2
                }else{

                    this.innerHTML="<img src='imagens/Círculo.png' class='img-jogada'>"
                    //this.setAttribute("jogada", player2)
                    this.dataset.jogada = player2
                    playtime = player1

                }


            }

            refreshTabuleiro()
            refreshVarEspacos()
            logicaJogo()

        })

    }
}








iniciarEspaco()

const player1 = "X";
const player2 = "O";
var playtime = player1;
this.gameover = false;

function refreshTabuleiro(){
    if (this.gameover){
        return;
    }

    if (playtime == player1){
        var player = document.getElementById("jodador-da-vez");
        player.setAttribute("src", "imagens/x.png");
    } else{
        var player = document.getElementById("jodador-da-vez");
        player.setAttribute("src", "imagens/Círculo.png");

    }
}


function iniciarEspaco(){
    var espacos = document.getElementsByClassName("espaco") 
    console.log(espacos)
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener('click', function(){
            if (gameover){
                return;
            }

            if(this.getElementsByTagName("img").length == 0){

                if (playtime == player1){

                    this.innerHTML="<img src='imagens/x.png' class='img-jogada'>"
                    this.setAttribute("jogada", player1)
                    playtime = player2
                }else{

                    this.innerHTML="<img src='imagens/Círculo.png' class='img-jogada'>"
                    this.setAttribute("jogada", player2)
                    playtime = player1

                }


            }
            refreshTabuleiro()
        })

    }
}

refreshTabuleiro()
iniciarEspaco()
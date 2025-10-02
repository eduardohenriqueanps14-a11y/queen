const { console } = require("inspector");
const readline = require("readline");
const rl =readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

const numero = math.floor(math.random() * 10) + 1;//de 1 a 10
let tentativas = 3;
function perguntar(){
    if (tentativas > 0){
        rl.question(`digite um nmero entre 1 a 10 (tentativas restantes: ${tentativas}) ` ,(respota) =>{
            let chute = parseInt(respota);

            if(chute === numerosecreto) {
                console.log("🎉parabens voce acertou o numero secreto!🥳");
                rl.close();
            }else{
                tentativas--;
                if (tentativas === 0) {
                    console.log(`👾fim de jogo 0 numero secreto era ${numerosecreto}.`)
                }else{
                    if(chute > numerosecreto){
                    console.log("👉dica o numero secreto e maior,");
                    }else {
                        console.log("👉dica o numero secreto e menor");

                    }
                    perguntar(); // chama de novo (while implicito)
                }
            }
        }
        )
        }
    }
    perguntar();

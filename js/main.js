let chars = ['aether', 'albedo', 'aloy', 'amber', 'ayaka', 'ayato', 'barbara', 'beidou', 'bennett',
 'chongyun', 'diluc', 'diona', 'eula', 'fischl', 'ganyu', 'itto', 'jean', 'kaeya', 'gorou', 'hutao', 
 'heizou', 'kazuha', 'klee', 'keqing', 'kokomi', 'lisa', 'lumine', 'mona', 'ningguang', 'noelle', 'qiqi',
   'razor', 'rosaria', 'sara', 'sayu', 'shenhe', 'shinobu', 'shogun', 'sucrose', 'thoma', 'venti',
    'tartaglia', 'xiangling', 'xiao', 'xingqiu', 'yanfei', 'yaemiko', 'xinyan', 'yelan', 'yoimiya',
     'yunjin', 'zhongli']
let picks = [] //Array com a ordem dos picks
let pickado = [] //Array que recebe os personagens pickados
let pickadoBoolean = false //Boolean que verifica se o personagem escolhido ja foi pickado/banido
let banido = [] //Array que recebe os personagens banidos
let c = 1 //contador
let z = 0 //contador da ordem de pick
let nomeAnterior; //Variavel que recebe o ultimo personagem escolhido que nao foi pickado/banido
let personagem = null  //Variavel usada na function selecionar(), para receber o id da div que chamou a funcao
let selecionado = false //Boolean que verifica se tem algo selecionado. A verificacao so ocorre caso pickadoBoolean seja false
let bans = document.getElementsByName('num_bans') //Variavel que recebe a quantidade de bans do form no popup
let tempo = document.getElementsByName('tempo_pick') //Variavel que recebe o tempo para pick/ban do form no popup
let mensagem = document.getElementById('mensagem_meio') //Variavel que recebe o texto no meio do site
let popup = document.querySelector('.popup_wrapper') //variavel popup
let time1form = document.querySelector('#time1form') //Nome time 1 no form
let time2form = document.querySelector('#time2form') //Nome time 2 no form
let time1 = document.querySelector('#time1') //Nome time 1 na tela
let time2 = document.querySelector('#time2') //Nome time 2 na tela
let clonePick = document.getElementById('clonePick') //Clonar pick checkbox
let cloneBoolean = false  //Usada para verificar se checkbox eh true ou false
let stylePersonagem //Utilizada para deixar o img cinza dos personagens que foram pickado/banido
let nomeVerificar //Recebe o nome do personagem que foi selecionado e usado para mudar o style do personagem que esta selecionado


/*
cores elementos
hydro - #3b72ba
pyro - #c56645
electro - #935dc5
dendro - 
cryo - #6ccadd
geo - #bc9746
anemo - #3db5b7

*/

function coinflip() {
    //funcao do popup para decidir quem eh time 1 e time 2
    let imgcoin = document.getElementById('coin')
    let coin = Math.floor(Math.random() * 2)
    if (coin == 0) {
        imgcoin.src = 'imagens/lumineCoin.png'
    } else {
        imgcoin.src = 'imagens/aetherCoin.png'
    }
}

function selecionar(e) { //funcao onclick nos elementos html passando o proprio id como parametro
    personagem = document.getElementById(e) 
    let nome = personagem.title
    nomeVerificar = nome
    pickadoBoolean = false
    if (cloneBoolean) {
        for (cont = 0; cont < 50; cont++) {
            if (nome == banido[cont]) {
                console.log(`${nome} ja pickado ou banido`);
                pickadoBoolean = true
            }
        }
        if (!pickadoBoolean) {
            imagem.src = `imagens/picks/Character_${nome}_Card.webp`
            nomeAnterior = nome
            selecionado = true
        }
    } else {
        for (i = 0; i < chars.length; i++) {
            if (nome == chars[i]) {
                for (cont = 0; cont < 50; cont++) {
                    if (nome == pickado[cont] || nome == banido[cont]) {
                        console.log(`${nome} ja pickado ou banido`);
                        pickadoBoolean = true
                    }
                }
                if (!pickadoBoolean) {
                    imagem.src = `imagens/picks/Character_${nome}_Card.webp`
                    nomeAnterior = nome
                    selecionado = true
                }
            }
        }
    }
}

function confirmar() { //funcao para confirmar o selecionado.
    if (selecionado) {
        removeBorder()
        cloneBoolean = false
        clonePick.checked = false
        for (cloneCont = 0; cloneCont < pickado.length; cloneCont++) {
            stylePersonagem = document.getElementById(pickado[cloneCont]).style.filter = "grayscale(100%)";
        }
        if (second & duration == -5) {
            document.getElementById('second').innerHTML = ''
            if (picks[z] == 17 || picks[z] == 18 || picks[z] == 19 || picks[z] == 20 || picks[z] == 21 
                || picks[z] == 22 || picks[z] == 23 || picks[z] == 24) {
                    banido.push(nomeAnterior)
                    stylePersonagem = document.getElementById(`${nomeAnterior}`).style.filter = "grayscale(100%)";
            } else if (picks[z] == 1 || picks[z] == 2 || picks[z] == 3 || picks[z] == 4 || picks[z] == 5 
                || picks[z] == 6 || picks[z] == 7 || picks[z] == 8 || picks[z] == 9 || picks[z] == 10 || picks[z] == 11 ||
                picks[z] == 12 || picks[z] == 13 || picks[z] == 14 || picks[z] == 15 || picks[z] == 16) {
                    pickado.push(nomeAnterior)
                    stylePersonagem = document.getElementById(`${nomeAnterior}`).style.filter = "grayscale(100%)";
            }
            selecionado = false
            c++
            z++
            imagem = document.getElementById(`pick${picks[z]}`)
            if (picks[z] == 17 || picks[z] == 18 || picks[z] == 19 ||picks[z] == 20) {
                mensagem.innerHTML = `Ban do ${time1form.value}`
            } else if (picks[z] == 21 || picks[z] == 22 || picks[z] == 23 ||picks[z] == 24) {
                mensagem.innerHTML = `Ban do ${time2form.value}`
            } else if (picks[z] == 9 || picks[z] == 13) {
                mensagem.innerHTML = `Force pick do ${time1form.value}`
            } else if (picks[z] == 1 || picks[z] == 5) {
                mensagem.innerHTML = `Force pick do ${time2form.value}`
            } else if (picks[z] == 2 || picks[z] == 3 || picks[z] == 4 || picks[z] == 6 || picks[z] == 7 || picks[z] == 8) {
                mensagem.innerHTML = `Pick do ${time1form.value}`
            } else if (picks[z] == 10 || picks[z] == 11 || picks[z] == 12 || picks[z] == 14 || picks[z] == 15 || picks[z] == 16) {
                mensagem.innerHTML = `Pick do ${time2form.value}`
            } else if (z >= picks.length) {
                mensagem.innerHTML = `Genshin Draft`
                console.log(banido);
                console.log(pickado);
            }
        } else {
            if (picks[z] == 17 || picks[z] == 18 || picks[z] == 19 || picks[z] == 20 || picks[z] == 21 
                || picks[z] == 22 || picks[z] == 23 || picks[z] == 24) {
                    banido.push(nomeAnterior)
                    stylePersonagem = document.getElementById(`${nomeAnterior}`).style.filter = "grayscale(100%)";
            } else if (picks[z] == 1 || picks[z] == 2 || picks[z] == 3 || picks[z] == 4 || picks[z] == 5 
                || picks[z] == 6 || picks[z] == 7 || picks[z] == 8 || picks[z] == 9 || picks[z] == 10 || picks[z] == 11 ||
                picks[z] == 12 || picks[z] == 13 || picks[z] == 14 || picks[z] == 15 || picks[z] == 16) {
                    pickado.push(nomeAnterior)
                    stylePersonagem = document.getElementById(`${nomeAnterior}`).style.filter = "grayscale(100%)";
            }
            selecionado = false
            c++
            z++
            imagem = document.getElementById(`pick${picks[z]}`)
            if (picks[z] == 17 || picks[z] == 18 || picks[z] == 19 ||picks[z] == 20) {
                mensagem.innerHTML = `Ban do ${time1form.value}`
                pause()
                reset()
                start()
            } else if (picks[z] == 21 || picks[z] == 22 || picks[z] == 23 ||picks[z] == 24) {
                mensagem.innerHTML = `Ban do ${time2form.value}`
                pause()
                reset()
                start()
            } else if (picks[z] == 9 || picks[z] == 13) {
                mensagem.innerHTML = `Force pick do ${time1form.value}`
                pause()
                reset()
                start()
            } else if (picks[z] == 1 || picks[z] == 5) {
                mensagem.innerHTML = `Force pick do ${time2form.value}`
                pause()
                reset()
                start()
            } else if (picks[z] == 2 || picks[z] == 3 || picks[z] == 4 || picks[z] == 6 || picks[z] == 7 || picks[z] == 8) {
                mensagem.innerHTML = `Pick do ${time1form.value}`
                pause()
                reset()
                start()
            } else if (picks[z] == 10 || picks[z] == 11 || picks[z] == 12 || picks[z] == 14 || picks[z] == 15 || picks[z] == 16) {
                mensagem.innerHTML = `Pick do ${time2form.value}`
                pause()
                reset()
                start()
            } else if (z >= picks.length) {
                pause()
                mensagem.innerHTML = `Genshin Draft`
                document.getElementById('second').innerHTML = ''
            }
        }
    }
    //alert(c)
}
function ordemPick(bans) {
    
    if (bans == 0) {
        picks.push(9)  //pick(numero do pick/ban) fp1
        picks.push(1)  //fp2
        picks.push(2)  //p1
        picks.push(10) //p2
        picks.push(11) //p2
        picks.push(3)  //p1
        picks.push(4)  //p1
        picks.push(12) //p2

        picks.push(5)  //fp2
        picks.push(13) //fp1
        picks.push(14) //p2
        picks.push(6)  //p1
        picks.push(7)  //p1
        picks.push(15) //p2
        picks.push(16) //p2
        picks.push(8)  //p1
    } else if (bans == 2) {
        picks.push(17) //b1
        picks.push(21) //b2
        picks.push(18) //b1
        picks.push(22) //b2

        picks.push(9)  //fp1
        picks.push(1)  //fp2
        picks.push(2)  //p1
        picks.push(10) //p2
        picks.push(11) //p2
        picks.push(3)  //p1
        picks.push(4)  //p1
        picks.push(12) //p2
        
        picks.push(5)  //fp2
        picks.push(13) //fp1
        picks.push(14) //p2
        picks.push(6)  //p1
        picks.push(7)  //p1
        picks.push(15) //p2
        picks.push(16) //p2
        picks.push(8)  //p1
    } else if (bans == 3) {
        picks.push(17) //b1
        picks.push(21) //b2
        picks.push(18) //b1
        picks.push(22) //b2

        picks.push(9)  //fp1
        picks.push(1)  //fp2
        picks.push(2)  //p1
        picks.push(10) //p2
        picks.push(11) //p2
        picks.push(3)  //p1
        picks.push(4)  //p1
        picks.push(12) //p2

        picks.push(23) //b2
        picks.push(19) //b1
        
        picks.push(5)  //fp2
        picks.push(13) //fp1
        picks.push(14) //p2
        picks.push(6)  //p1
        picks.push(7)  //p1
        picks.push(15) //p2
        picks.push(16) //p2
        picks.push(8)  //p1
    } else if (bans == 4) {
        picks.push(17) //b1
        picks.push(21) //b2
        picks.push(18) //b1
        picks.push(22) //b2

        picks.push(9)  //fp1
        picks.push(1)  //fp2
        picks.push(2)  //p1
        picks.push(10) //p2
        picks.push(11) //p2
        picks.push(3)  //p1
        picks.push(4)  //p1
        picks.push(12) //p2

        picks.push(23) //b2
        picks.push(19) //b1
        picks.push(24) //b2
        picks.push(20) //b1
        
        picks.push(5)  //fp2
        picks.push(13) //fp1
        picks.push(14) //p2
        picks.push(6)  //p1
        picks.push(7)  //p1
        picks.push(15) //p2
        picks.push(16) //p2
        picks.push(8)  //p1
    }
    imagem = document.getElementById(`pick${picks[0]}`)
}

function comecar() { //botao comecar do popup
    time1.innerHTML = time1form.value
    time2.innerHTML = time2form.value
    if (bans[0].checked) {
        let num_bans = 0
        ordemPick(num_bans)
        mensagem.innerHTML = `Force pick do ${time1form.value}`
    } else if (bans[1].checked) {
        let num_bans = 2
        ordemPick(num_bans)
        mensagem.innerHTML = `Ban do ${time1form.value}`
    } else if (bans[2].checked) {
        let num_bans = 3
        ordemPick(num_bans)
        mensagem.innerHTML = `Ban do ${time1form.value}`
    } else if (bans[3].checked) {
        let num_bans = 4
        ordemPick(num_bans)
        mensagem.innerHTML = `Ban do ${time1form.value}`
    }
    if (tempo[0].checked) {
        second = -5
        duration = -5
        document.getElementById('second').innerHTML = ''
    } else if (tempo[1].checked) {
        second = 30
        duration = 30
        document.getElementById('second').innerHTML = duration
        start()
    } else if (tempo[2].checked) {
        second = 45
        duration = 45
        document.getElementById('second').innerHTML = duration
        start()
    } else if (tempo[3].checked) {
        second = 60
        duration = 60
        document.getElementById('second').innerHTML = duration
        start()
    }
    popup.style.display = 'none'
}

//TIMER 

let duration;
let second;

let cron;

function start() {
    pause()
    cron = setInterval(() => {
        timer1()
    }, 1000)
}
function pause() {
    clearInterval(cron)
}
function reset() {
    second = duration
    document.getElementById('second').innerHTML = duration
}
function timer1() {
    --second
    if (second == 0) {
        if (!selecionado) {
            pickarAleatorio()
        }
        pause()
        confirmar()
    }
    document.getElementById('second').innerHTML = returnData(second)
    
}
function returnData(input) {
    return input < 10 ? `0${input}` : input
}

//Pickar aleatorio quando o timer zerar

function pickarAleatorio() {
    pickadoBoolean = false
    let randomPers = Math.floor(Math.random() * chars.length)
    for (contRandom = 0; contRandom < 50; contRandom++) {
        if (chars[randomPers] == pickado[contRandom] || chars[randomPers] == banido[contRandom]) {
            console.log(`${chars[randomPers]} ja pickado ou banido`);
            pickadoBoolean = true
        }
    }
    if (!pickadoBoolean) {
        imagem.src = `imagens/picks/Character_${chars[randomPers]}_Card.webp`
        nomeAnterior = chars[randomPers]
        selecionado = true
    } else {
        pickarAleatorio()
    }
}

//Quando checkbox clonar estiver selecionado

function clonar() {
    if (clonePick.checked) {
        cloneBoolean = true
        for (cloneCont = 0; cloneCont < pickado.length; cloneCont++) {
            stylePersonagem = document.getElementById(pickado[cloneCont]).style.filter = "grayscale(0%)";
        }
    } else {
        for (cloneCont = 0; cloneCont < pickado.length; cloneCont++) {
            stylePersonagem = document.getElementById(pickado[cloneCont]).style.filter = "grayscale(100%)";
        }
        cloneBoolean = false
    }
}

//Style do selecionado

const personagemStyle = document.querySelectorAll('.personagem');
let styleBoolean = false

function selectItem(e) {
    styleBoolean = false
    if (cloneBoolean) {
        for (contStyle = 0; contStyle < 50; contStyle++) {
            if (nomeVerificar == banido[contStyle]) {
                styleBoolean = true
                break
            }
        }
        if (!styleBoolean) {
            removeBorder()
            this.classList.add('personagem_background')
        }
    } else {
        for (contStyle = 0; contStyle < 50; contStyle++) {
            if (nomeVerificar == pickado[contStyle] || nomeVerificar == banido[contStyle]) {
                styleBoolean = true
                break
            }
        }
        if (!styleBoolean) {
            removeBorder()
            this.classList.add('personagem_background')
        }
    }
    
}

function removeBorder() {
    personagemStyle.forEach(item => item.classList.remove('personagem_background'))
}


personagemStyle.forEach(item => item.addEventListener('click', selectItem))



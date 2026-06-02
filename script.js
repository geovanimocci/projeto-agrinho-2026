```javascript
/* =====================================
   AGRO FORTE - FUTURO SUSTENTÁVEL
   script.js
===================================== */


/* =====================================
   ANIMAÇÃO DOS CONTADORES
===================================== */

const contadores = document.querySelectorAll(".numero h3");

function animarContadores() {

    contadores.forEach(contador => {

        const valorFinal = parseInt(
            contador.innerText.replace("%", "")
        );

        let valorAtual = 0;

        const incremento = valorFinal / 100;

        const intervalo = setInterval(() => {

            valorAtual += incremento;

            contador.innerText =
                Math.floor(valorAtual) + "%";

            if (valorAtual >= valorFinal) {

                contador.innerText =
                    valorFinal + "%";

                clearInterval(intervalo);
            }

        }, 20);

    });

}


/* =====================================
   OBSERVER DAS ESTATÍSTICAS
===================================== */

const secaoImpacto =
document.querySelector(".estatisticas");

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animarContadores();

            observer.unobserve(
                entry.target
            );

        }

    });

},
{
    threshold: 0.5
}
);

if(secaoImpacto){
    observer.observe(secaoImpacto);
}


/* =====================================
   EFEITO DE APARECER AO ROLAR
===================================== */

const elementosAnimados =
document.querySelectorAll(
".card, .sobre img, .sobre div"
);

function revelarElementos(){

    elementosAnimados.forEach(elemento => {

        const topo =
        elemento.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if(topo < alturaTela - 100){

            elemento.style.opacity = "1";
            elemento.style.transform =
            "translateY(0)";

        }

    });

}

elementosAnimados.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
    "translateY(50px)";

    elemento.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revelarElementos
);

revelarElementos();


/* =====================================
   MODO ESCURO
===================================== */

const botaoTema =
document.getElementById("temaBtn");

if(botaoTema){

    botaoTema.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "modo-escuro"
        );

    });

}


/* =====================================
   SIMULADOR SUSTENTÁVEL
===================================== */

function calcularImpacto(){

    const hectares =
    Number(
        document.getElementById("hectares")
        .value
    );

    const resultado =
    document.getElementById("resultado");

    if(hectares <= 0){

        resultado.innerHTML =
        "Informe uma área válida.";

        return;
    }

    const economiaAgua =
    hectares * 120;

    const reducaoCarbono =
    hectares * 45;

    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Economia de água:
        ${economiaAgua} litros<br>

        Redução de CO₂:
        ${reducaoCarbono} kg
    `;

}


/* =====================================
   QUIZ DE SUSTENTABILIDADE
===================================== */

function verificarQuiz(){

    let pontos = 0;

    const q1 =
    document.querySelector(
    'input[name="q1"]:checked'
    );

    const q2 =
    document.querySelector(
    'input[name="q2"]:checked'
    );

    const q3 =
    document.querySelector(
    'input[name="q3"]:checked'
    );

    if(q1 && q1.value === "correto"){
        pontos++;
    }

    if(q2 && q2.value === "correto"){
        pontos++;
    }

    if(q3 && q3.value === "correto"){
        pontos++;
    }

    const resultadoQuiz =
    document.getElementById(
    "resultadoQuiz"
    );

    resultadoQuiz.innerHTML =
    `Você acertou ${pontos} de 3 perguntas! 🌱`;

}


/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

const voltarTopo =
document.getElementById(
"voltarTopo"
);

window.addEventListener(
"scroll",
() => {

    if(!voltarTopo) return;

    if(window.scrollY > 400){

        voltarTopo.style.display =
        "block";

    } else {

        voltarTopo.style.display =
        "none";

    }

}
);

if(voltarTopo){

    voltarTopo.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================
   DATA AUTOMÁTICA NO RODAPÉ
===================================== */

const anoAtual =
new Date().getFullYear();

const anoElemento =
document.getElementById("ano");

if(anoElemento){

    anoElemento.textContent =
    anoAtual;

}


/* =====================================
   MENSAGEM DE BOAS-VINDAS
===================================== */

window.addEventListener(
"load",
() => {

    console.log(
        "Bem-vindo ao Agro Forte!"
    );

}
);
```

// Pegando todod os botões
const btns = document.querySelectorAll(".section_number ul li");
const screen = document.querySelector(".result span");
const answers = document.querySelectorAll('.footer p');
const numberOne = document.querySelector('.numberOne');
const numberthwo = document.querySelector('.numberthwo');
const operator = document.querySelector('.operator');
const oper = document.querySelectorAll(".section_answer ul li");
const ponts = document.querySelector(".score");
const heart = document.querySelector(".life p");



var score = 3;
ponts.innerText = score;
// Work with screen - BTN - Numbers - Clear
let screenArr = [];

const clickBtn = (e) => {
    switch (e.target.innerText) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
        case '-':

            screenArr.push(e.target.innerText);
            screen.innerText = (screenArr.join('').length > 7 ? "Max 7 " : screenArr.join(''));
            break;

        case 'c':
            screen.innerText = "-";
            screenArr = [];
            break;
    }
}
btns.forEach(btn => {
    btn.addEventListener("click", clickBtn);
});


// signal

oper.forEach(sinal => {
    sinal.addEventListener("click", (img) => {
        operator.innerText = img.target.innerText;
    })

})


const exeCalc = (numberOne, numberthwo, operator) => {
    switch (operator) {
        case "-":
            var val = +numberOne - +numberthwo;
            return val;
        case "+":
            var val = +numberOne + +numberthwo;
            return val;
        case "X":
            var val = +numberOne * +numberthwo;
            return val;
        case "/":
            var val = +numberOne / +numberthwo;
            val = val.toFixed(2);
            val = parseFloat(val);
            return val;

    }
}
//answers
const clickAnswer = (e) => {
    var val1 = numberOne.innerText
    var val2 = numberthwo.innerText
    var oper = operator.outerText
    var val = exeCalc(val1, val2, oper);

    console.log(e);
    switch (e.target.innerText) {
        case 'Responder':

            if (val == screen.innerText) {
                screen.innerText = "Acertou";
                screenArr = []
                score++;

                moreLife();
            } else {
                screen.innerText = "Errou";
                screenArr = [];
                resetScreen();
                if (score == 0) {
                    alert("Unica opção, acertar :)")
                    resetScreen();
                } else {
                    score--;
                }
            }
            ponts.innerText = score;


            break;
        case 'Resposta':

            screen.innerText = val;


            break;
        case 'Ajuda':
            alert(`
             1 - Acerte 10 vezes seguida e ganhe 1 vida
             2 - A cada erro você perde 1 vida
             3 - Você terá direito a 3 respostas grátis
             4 - Acerte 10 vezes e ganhe uma vida
             `);
            break;
    }
}


console.log(answers)

answers.forEach(answer => {
    answer.addEventListener("click", clickAnswer);
})
const numbers = () => {
    numberOne.innerText = Math.floor(Math.random() * 10);
    numberthwo.innerText = Math.floor(Math.random() * 10);
}
numbers();

function resetScreen() {
    setTimeout(() => {
        screen.innerText = "-";
        screenArr = [];
        numbers()
    }, 1000);
}


var life = 3
const moreLife = () => {
    if (score == 10) {
        life++;
        score = 0;
        ponts.innerText = score;
    }
    heart.innerText = life;
    console.log(life);
}

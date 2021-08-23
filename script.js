const quizDB = [{

        Question: "Q1 : Whats your Father name ?",
        a: "ramesh",
        b: "jayes",
        c: "kanak",
        d: "abdulkaiyum",
        ans: "ans4"
    },
    {
        Question: "Q2 : Whats your mother name ?",
        a: "ramesh",
        b: "aaisha",
        c: "kanak",
        d: "jayesh",
        ans: "ans2"
    },
    {
        Question: "Q3 : Whats your brother name ?",
        a: "jabir",
        b: "jayes",
        c: "kanak",
        d: "kanti",
        ans: "ans1"
    },
    {
        Question: "Q4 : Whats your sister name ?",
        a: "tanvira",
        b: "jayes",
        c: "kanak",
        d: "ramesh",
        ans: "ans1"
    },
    {
        Question: "Q5 : Whats your  name ?",
        a: "Mustakim",
        b: "Uvesh",
        c: "Jabir",
        d: "Juber",
        ans: "ans1"
    },
];

const qutiones = document.querySelector('.qutiones');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const op3 = document.querySelector('#op3');
const op4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let qutionesCount = 0;
let score = 0;


const loadQuestion = () => {
    const qutioneList = quizDB[qutionesCount];
    qutiones.innerText = qutioneList.Question;
    op1.innerText = qutioneList.a;
    op2.innerText = qutioneList.b;
    op3.innerText = qutioneList.c;
    op4.innerText = qutioneList.d;

}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            answer = curAnsEle.id;
        }
    });
    return answer;

};


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[qutionesCount].ans) {
        score++;
    };

    qutionesCount++;

    if (qutionesCount < quizDB.length) {
        loadQuestion();

    } else {
        showscore.innerHTML = `<h1>Yor Scored
         ${score}/${quizDB.length}WIN..WIN..
         </h1>  <button class = "btn"
        onclick = "location.reload()"> Play Again </button>`;

        showscore.classList.remove('showsarea');
    }



});
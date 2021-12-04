const quizData = [
    {
        question: "Việt Nam đứng thứ mấy về số lượng tiêu thụ rác thải nhựa?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const start_btn = document.querySelector(".btn .start")
const btn = document.querySelector(".buttons")
const myName = document.querySelector(".name")
const myBtn = document.querySelector(".myButton")
let useName;
let currentQuiz = 0;
let score = 0;


myBtn.onclick = () => {
    useName = document.querySelector(".myText").value
    btn.classList.remove("hide")
    myName.classList.add("hide")
}

start_btn.onclick = () => {
    quiz.classList.remove("hide")
    btn.classList.add("hide")
}


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Chúc mừng ${useName} đã trả lời đúng ${score}/${quizData.length} câu.</h2>
                
                <button onclick="location.reload()">Chơi Lại</button>
            `;
        }
    }
});

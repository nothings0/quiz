const quizData = [
    {
        question: "Thời gian phân huỷ rác thải nhựa là bao nhiêu?",
        a: "10 – 20 năm",
        b: "50 – 60 năm",
        c: "100 – 200 năm",
        d: "450 – 1000 năm",
        anhnen: "g-3.jpg",
        correct: "d",
    },
    {
        question: "Rác thải nhựa khi được xử lý sẽ thải ra những loại khí nào?",
        a: "Oxit cácbon, hydrocacbon, benzen, dioxin",
        b: "Krypton, hydrogen sulfide, silane",
        c: "Xenon, stibine, silane",
        d: "Phosphine, oxygen, nitrogen",
        anhnen: "g-4.jpg",
        correct: "a",
    },
    {
        question: "Việt Nam đứng thứ bao nhiêu trong việc xả rác thải nhựa ra môi trường?",
        a: "4",
        b: "5",
        c: "1",
        d: "2",
        anhnen: "g-5.jpg",
        correct: "a",
    },
    {
        question: "Nước nào có lượng rác thải nhựa lớn nhất thế giới?",
        a: "Mỹ",
        b: "Trung Quốc",
        c: "Nga",
        d: "Ấn Độ",
        anhnen: "b-5.jpg",
        correct: "a",
    },
    {
        question: "Biện pháp xử lý rác thải nhựa nào ít gây ô nhiễm môi trường nhất?",
        a: "Đốt cháy",
        b: "Chôn lấp",
        c: "Tái chế",
        d: "Tất cả ý kiến trên",
        anhnen: "g-2.jpg",
        correct: "c",
    },
    {
        question: "Các loại rác thải nhựa có thể tái chế?",
        a: "Tất cả rác thải nhựa đều có thể tái chế",
        b: "PETE, HDPE, PP, ABS",
        c: "PVC, LDPE, PS, nhóm nhựa số 7",
        d: "Không có loại rác thải nhựa nào có thể tái chế",
        anhnen: "a-1.jpg",
        correct: "b",
    },
    {
        question: "Biện pháp nào hạn chế việc xả rác thải nhựa ra môi trường?",
        a: "Thay đổi thói quen sử dụng ống hút nhựa",
        b: "Dùng lọ thuỷ tinh có thể tái sử dụng",
        c: "Mua đồ có bao bì hộp giấy thay vì chai/hộp nhựa",
        d: "Tất cả các ý trên",
        anhnen: "g-1.jpg",
        correct: "d",
    },
];

const image = document.querySelector(".anh")
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
const myText = document.querySelector(".myText")
const para = document.querySelector(".para")
let useName;
let currentQuiz = 0;
let score = 0;


myBtn.onclick = () => {
    useName = myText.value
    btn.classList.remove("hide")
    myName.classList.add("hide")
    para.innerHTML = `
        <p>Chào mừng <span>${useName}</span> đến với bài thi test của chúng tôi, hãy ghé xem trang Web </br>để hiểu hơn về rác thải nhựa trước khi tham gia phần thi test.</p>
    `
}

start_btn.onclick = () => {
    quiz.classList.remove("hide")
    btn.classList.add("hide")
}

myText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.querySelector(".myButton").click();
    }
});



loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    image.setAttribute("src", currentQuizData.anhnen)
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
            if(score<=3){
                quiz.innerHTML = `
                <h2>Bạn chỉ trả lời đúng ${score}/${quizData.length} câu, hãy thử lại nhé.</h2>
                
                <button onclick="location.reload()">Thử Lại</button>
            `;
            }else if(score<7 && score>3){
                quiz.innerHTML = `
                <h2>Chúc mừng <span>${useName}</span> đã trả lời đúng ${score}/${quizData.length} câu.</h2>
                
                <button onclick="location.reload()">Thử Lại</button>
            `;
            }else{
                quiz.innerHTML = `
                <h2>Chúc mừng <span>${useName}</span> đã trả lời đúng ${score}/${quizData.length} câu.</h2>
                
                <button href="https://nothings0.github.io/demo/">Web môi trường</button>
            `;
            }
            
        }
    }
});

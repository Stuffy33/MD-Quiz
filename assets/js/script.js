//Question bank
let questionBank = [
    {
    answer: "A flow of electrons",
    option: [
    "A flow of water",
    "A flow of air",
    "A flow of electrons",
    "A flow of atoms"
    ],
    question: "What is actually electricity?"
    },
    {
    answer: "Agoraphobia",
    option: [
    "Agoraphobia",
    "Aerophobia",
    "Acrophobia",
    "Arachnophobia"
    ],
    question: "Which of the following disorders is the fear of being alone?"
    },
    {
    answer: "1,200 km/h",
    option: [
    "120 km/h",
    "1,200 km/h",
    "400 km/h",
    "700 km/h"
    ],
    question: "What is the speed of sound?"
    },
    {
    answer: "Gas",
    option: ["Liquid lava", "Gas", "Molten iron", "Rock"],
    question: "What is the main component of the sun?"
    },
    {
    answer: "Ductility",
    option: [
    "Plasticity",
    "Elasticity",
    "Ductility",
    "Malleability"
    ],
    question: "The property of a material which enables it to be drawn into wires with the application of a tensile force, is called?"
    }
]

let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let question = document.getElementById("question");
let nextBtn = document.querySelector(".next-btn");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option = document.querySelector(".option");
let points = document.getElementById("score");
let score = 0;
let i = 0;

//function to display questions
function displayQuestion(){
    for(a = 0; a < option.length; a++){
        option[a].style.background = "none";
    }
    question.innerHTML = questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    
    //Display xof5
    xof5.innerHTML = "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(event){
    if (event.innerHTML === questionBank[i].answer && score < questionBank.length){
        score = score + 1;
        document.getElementById(event.id).style.background = "limegreen";
    }
    else{
        document.getElementById(event.id).style.background= "red";
    }
    setTimeout(nextQuestion, 400);
    
}

//function to display next question
function nextQuestion(){
    if (i < questionBank.length - 1){
        i = i + 1;
        displayQuestion();
    }
    else{
        points.innerHTML = score + "/" + questionBank.length;
        quizContainer.style.display = "none";
        scoreboard.style.display= "block"
    }
}

//click event to next-btn
nextBtn.addEventListener("click", nextQuestion);

//Redo Quiz
function redoQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerContainer = document.getElementById("answerContainer");
    let answers = document.getElementById("answers");
    answerContainer.style.display = "block";
    scoreboard.style.display = "none";
    
    for (a = 0; a < questionBank.length; a++){
        let list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();


//Question bank
let questionBank = [
     {
         question: "What is actually electricity?",
         option: ["A flow of water", "A flow of air", "A flow of electrons", "A flow of atoms"],
         answer: "A flow of electrons"
     },
     {
         question: "Which of the following disorders is the fear of being alone?",
         option: [
             "Agoraphobia",
             "Aerophobia",
             "Acrophobia", 
             "Arachnophobia"
         ],
         answer: "Agoraphobia"
     },
     {
         question: "What is the speed of sound?",
         option: [
             "120 km/h", 
             "1,200 km/h", 
             "400 km/h", 
             "700 km/h"
         ],
         answer: "1,200 km/h"
     },
     {
         question: "What is the main component of the sun?",
         option: ["Liquid lava", "Gas", "Molten iron", "Rock"],
         answer: "Gas"
     },
     {
         question: "The property of a material which enables it to be drawn into wires with the application of a tensile force, is called?",
         option: [
             "Plasticity", 
             "Elasticity", 
             "Ductility", 
             "Malleability"
         ],
         answer: "Ductility"
     },
]

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let nextBtn = document.querySelector(".next-btn");
let option = document.querySelector(".option");
let points = document.getElementById("score");
let i = 0;
let score = 0;

//function to display questions
function displayQuestion(){
    for(let a = 0; a < option.length; a++){
        option[a].style.background = "none";
    }
    question.innerHTML = questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    
    //Display xof5
    xof5.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
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
    setTimeout(nextQuestion, 300);
    
}

//function to display next question
function nextQuestion(){
    if (i < questionBank.length - 1){
        i = i + 1;
        displayQuestion();
    }
    else{
        points.innerHTML= score + "/" + questionBank.length;
        quizContainer.style.display = "none";
        scoreboard.style.display= "block"
    }
}

//click event to next-btn
nextBtn.addEventListener("click", nextQuestion);

//Back to Quiz
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerContainer = document.getElementById("answerContainer");
    let answers = document.getElementById("answers");
    answerContainer.style.display = "block";
    scoreboard.style.display = "none";
    for (let a = 0; a < questionBank.length; a++){
        let list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();


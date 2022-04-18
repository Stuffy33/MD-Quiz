//Question bank
let questionBank = [
     {
         question: "Which of clearance angle interval is most commonly used?",
         option: ["0-3°", "1-3°", "3-5°", "5-10°"],
         answer: "1-3°"
     },
     {
         question: "Which of the following fastening methods is cheapest for a plastic part?",
         option: [
             "Injection molded snaphooks",
             "Screw connections",
             "Glue", 
             "Hot air welding"
         ],
         answer: "Injection molded snaphooks"
     },
     {
         question: "What is the primary function of fillets/chamfers?",
         option: [
             "Estetics", 
             "Remove risk of user cutting themselfs", 
             "Better molding results", 
             "Better strength properties"
         ],
         answer: "Better molding results"
     },
     {
         question: "Which of following plastics has the highest tensile strength?",
         option: ["ABS", "PC", "PP", "PET"],
         answer: "PC"
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


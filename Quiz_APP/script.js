/*
const questions = [
    {
        question: "Which is the largest animal in the word",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Austrailia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
    {
        question: "Which is the largest Continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Austrailia", correct: false},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

 function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.coorect){
        button.dataset.coorect = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });


 }

 function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }


 function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.coorect === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.coorect === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showscore(){
    resetstate();
    questionElement.innerHTML = 'Your score ${score} out of ${questions.length}!' ;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex << questions.length){
        showQuestion();
    }else{
        showscore();
    }
 }


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


  startQuiz();
*/
const questions = [
    {
        question: "What is the worst-case time complexity of linear search algorithm?",
        answers: [
            {text: "O(1)", correct: false},
            {text: "O(log n)", correct: false},
            {text: "O(n)", correct: true},
            {text: " O(n^2)", correct: false}
        ]
    },
    {
        question: "Which of the following data structures is used to implement a recursive function call?",
        answers: [
            {text: "Queue", correct: false},
            {text: "Stack", correct: true},
            {text: "Heap", correct: false},
            {text: "Tree", correct: false}
        ]
    },
    {
        question: "Which of the following sorting algorithms is not a comparison-based sorting algorithm?",
        answers: [
            {text: " Bubble sort", correct: false},
            {text: "Quick sort", correct: false},
            {text: "Counting sort", correct: true},
            {text: "Merge sort", correct: false}
        ]
    },
    {
        question: "Which of the following is an example of a greedy algorithm?",
        answers: [
            {text: "Dijkstra’s algorithm", correct: false},
            {text: "Kruskal’s algorithm", correct: false},
            {text: "Huffman coding", correct: false},
            {text: " All of the above", correct: true}
        ]
    },
    {
        question: "Which of the following is a valid representation of a binary tree node in C language?",
        answers: [
            {text: "struct node { int data; struct node *left, *right; };", correct: true},
            {text: "struct node { int data; struct node left, right; };", correct: false},
            {text: "struct node { int data; struct node *left; struct node right; };", correct: false},
            {text: " struct node { int data; struct node left; struct node *right; };", correct: false}
        ]
    },
    {
    question: "Which of the following graph traversal algorithms uses a queue data structure?",
    answers: [
        {text: "Depth-first search", correct:false },
        {text: " Breadth-first search ", correct:true },
        {text: "Topological sort", correct:false },
        {text: "None of the above", correct:false }
    ] 
},
  {
    question: "What is the height of a complete binary tree with n nodes?",
    answers:[
        {text: "log(n)", correct:false},
        {text: "log(n+1)", correct:false},
        {text: "log(n-1)", correct:true},
        {text: "log(2n)", correct:false}
    ]
  },
  {
    question: "What is the output of the following code snippet in C? 123",
    answers:[
        {text: "1", correct:false},
        {text: "2", correct:false},
        {text: "3", correct:false},
        {text: "Garbage value", correct:true}
    ]
  }



];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

 function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });


 }

 function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }


 function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showscore(){
    resetstate();
    questionElement.innerHTML = `Congratulations! Your score ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
 }


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


  startQuiz();








































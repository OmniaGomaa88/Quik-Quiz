const question = document.getElementById("question")
const choices =Array.from( document.getElementsByClassName("choice-text"))
let cerrentQuistion= {};
let score=0;
let trueAnswer=true;
let questionCounter=0;
let AvaiablerQeustion=[  ]
let Questions=[
    {
        question:"What is the use of isNaN function in javascript?",
        choice1:"function returns true if the argument is not a number otherwise it is false",
        choice2:"keyword is used to delete the property as well as its value",
        choice3:"method searches a string for a specified value and returns the position of the match",
        choice4:"function  parses a string and returns a number.",
        answer:1
        
    },
    {
        question:"What is negative infinity in javascript?",
        choice1:"function returns returns the largest number possible in JavaScript ",
        choice2:"keyword is used to delete the property as well as its value",
        choice3:"is a number in JavaScript which can be derived by dividing negative number by zero.  ",
        choice4:"parses a string and returns a number.",
        answer:3
        
    },
    {
        question:"How to create a hyperlink in HTML?",
        choice1:"<a url =  javaTpoint.com /a>",
        choice2:"<a href => javaTpoint.com </a>",
        choice3:"<a> www.javatpoint.com <javaTpoint.com /a>",
        choice4:"<a link = > javaTpoint.com </a>",
        answer:2
        
    },
]

// constants
const bonus=10;
const max_questions=3; 
// function to start game
startGame=()=>{
    questionCounter=0;
    score=0;
    AvaiablerQeustion=[...Questions];
    console.log(AvaiablerQeustion)
    getNewQuestion()
};
getNewQuestion=()=>{
    questionCounter++;
    cerrentQuistion=AvaiablerQeustion[Math.floor(Math.random()*AvaiablerQeustion.length) ]
    console.log(cerrentQuistion)
    question.textContent=cerrentQuistion.question
    choices.forEach(choice=>{
        const number=choice.dataset["number"]
    choice.innerText=cerrentQuistion["choice"+number]
    })
}
startGame()


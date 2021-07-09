/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. How many number of swaps needed to sort the numbers 27, 61, 82, 64, 27, 62 in non-decreasing order, using Bubble Sort? ", ///// Write the question inside double quotes
answers: {
a: "8", ///// Write the option 1 inside double quotes
b: "7", ///// Write the option 2 inside double quotes
c: "6", ///// Write the option 3 inside double quotes
d: "5", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. What is the best case time complexity of Bubble Sort?",  ///// Write the question inside double quotes
answers: {
a: "O(N)",                  ///// Write the option 1 inside double quotes
b: " O(N<sup>2</sup>)",                  ///// Write the option 2 inside double quotes
c: "O(N<sup>3</sup>) ", ///// Write the option 3 inside double quotes
d: "Cannot Determine ", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. How many iterations of Bubble Sort (can be slightly modified) will it take to determine if an array with N elements is 'ALMOST' sorted (elements are at max one position away from their correct places)? ",  ///// Write the question inside double quotes
answers: {
a: "1",                  ///// Write the option 1 inside double quotes
b: "2",                  ///// Write the option 2 inside double quotes
c: "N", ///// Write the option 3 inside double quotes
d: "Insufficient information", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "4.What is the worst case scenario for Bubble Sort?",  ///// Write the question inside double quotes
answers: {
a: " Reverse sorted array",                  ///// Write the option 1 inside double quotes
b: " Sorted array ",                  ///// Write the option 2 inside double quotes
c: "Smallest element in last position ", ///// Write the option 3 inside double quotes
d: "Largest element in first position ", ///// Write the option 4 inside double quotes
e: "a,c ", ///// Write the option 5 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "5. Can you modify Bubble Sort to find the kth smallest element?",  ///// Write the question inside double quotes
answers: {
a: "Yes, in K iterations ",                  ///// Write the option 1 inside double quotes
b: " Yes, in (N-K) iterations",                  ///// Write the option 2 inside double quotes
c: "No ", ///// Write the option 3 inside double quotes
d: " Insufficient Information  ", ///// Write the option 4 inside double quotes
e: "a,b ", ///// Write the option 4 inside double quotes
},
correctAnswer: "d"                ///// Write the correct option inside double quotes
},

];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

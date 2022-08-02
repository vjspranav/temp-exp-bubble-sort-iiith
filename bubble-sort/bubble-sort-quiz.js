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
            question: "1. When do we swap the ith and (i+1)th element of an array A while doing Bubble Sort? ", ///// Write the question inside double quotes
            answers: {
                a: "A[i] >= A[i+1]", ///// Write the option 1 inside double quotes
                b: "A[i] > A[i+1]", ///// Write the option 2 inside double quotes
                c: "A[i] <= A[i+1]", ///// Write the option 1 inside double quotes
                d: "A[i] < A[i+1]", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Which element reaches its correct position after 1st iteration?",  ///// Write the question inside double quotes
      answers: {
        a: "Greatest element",                  ///// Write the option 1 inside double quotes
        b: "Smallest element",                  ///// Write the option 2 inside double quotes
	c: "Middle element", ///// Write the option 3 inside double quotes
        d: "No element", ///// Write the option 4 inside double quotes

             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. How many comparisons do I need to make for one iteration on an array of size 4? ",  ///// Write the question inside double quotes
      answers: {
        a: "4 comparisons",                  ///// Write the option 1 inside double quotes
        b: "3 comparisons",                  ///// Write the option 2 inside double quotes
	c: "2 comparisons", ///// Write the option 3 inside double quotes
        d: "Depends on their order", ///// Write the option 4 inside double quotes

             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
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

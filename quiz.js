(function() {
    const question1 = [
        {
            question: "How do you describe yourself as a developer?",
            answers: {
                a: "Hermit",
                b: "Sociable",
                c: "Serious",
                d: "Grumpy",
                e: "do not know yet"
            },
            correctAnswer: ['a','b','c','d','e']
        }
    ];

    const question2 = [
        {
            question: "Select the JavaScript based technologies:",
            answers: {
                a: "AngularJS",
                b: "Ember",
                c: "VueJS",
                d: "Java",
                e: "C#"
            },
            correctAnswer: ['a','b','c']
        }
    ];

    const questionText = [
        {
            question: "Enter in a palindrome:"
        },
        {
            question: "Enter in a sentence:",
            question: "Enter the sentence in reverse:"
        }
    ];

  function buildQuiz() {
    const output = [];

    question1.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
        );
    });

    question2.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
               <input type="checkbox" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
          );
      });

    questionText.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (word in currentQuestion.answers) {
          answers.push(
            `<label>
                <input type="text" name="question${questionNumber}" value="${word}">
            </label>`
          );
        }
  
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
          );
      });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    question1.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            answerContainers[questionNumber].style.color = "yellow";
          }
    });
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
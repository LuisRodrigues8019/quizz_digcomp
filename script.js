// Sélection des éléments DOM
const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const nextBtn = document.querySelector(".next-btn");
const optionList = document.querySelector(".option-list");
const imgBtn = document.querySelector(".img-btn");
const popupContent = document.querySelector(".popup-content");
const closeBtn = document.querySelector(".close-btn");

// Variables de contrôle du quiz
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// Tableau des indices des questions pour afficher la popup
const popupQuestionIndices = [1, 2, 3];

// Fonctions pour gérer l'affichage de la popup
function togglePopup(show) {
  popupContent.classList.toggle("active", show);
}

function openPopup() {
  togglePopup(true);
}

function onQuestionChange(index) {
  const showPopup = popupQuestionIndices.includes(index);
  const question = questions[index];

  if (showPopup && question.image) {
    // Mettre à jour l'image dans la popup
    const popupImg = document.querySelector(".popup-content img");
    popupImg.src = question.image;

    imgBtn.classList.add("active");
    setTimeout(() => {
      imgBtn.classList.add("visible");
    }, 10);
    imgBtn.addEventListener("click", openPopup);
  } else {
    imgBtn.classList.remove("visible");
    setTimeout(() => {
      imgBtn.classList.remove("active");
    }, 300);
    imgBtn.removeEventListener("click", openPopup);
  }
}

// Initialisation et gestion des événements
document.addEventListener("DOMContentLoaded", () => {
  startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
  };

  exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
  };

  continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");

    showQuestions(0);
    questionCounter(1);
    headerScore();
    onQuestionChange(0);
  };

  tryAgainBtn.onclick = () => {
    sessionStorage.clear();
    quizBox.classList.add("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
    userAnswers.length = 0;
    correctAnswers.length = 0;
    onQuestionChange(0);
  };

  goHomeBtn.onclick = () => {
    sessionStorage.clear();
    quizSection.classList.remove("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    userAnswers.length = 0;
    correctAnswers.length = 0;
    onQuestionChange(0);
  };

  nextBtn.onclick = () => {
    togglePopup(false);
    if (questionCount < questions.length - 1) {
      questionCount++;
      showQuestions(questionCount);
      questionNumb++;
      questionCounter(questionNumb);
      nextBtn.classList.remove("active");
      onQuestionChange(questionCount);
    } else {
      showResultBox();
    }
  };

  closeBtn.addEventListener("click", () => togglePopup(false));
  window.addEventListener("click", (event) => {
    if (event.target === popupContent) togglePopup(false);
  });
});

// Fonction pour afficher les questions
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = questions[index].options
    .map((option) => `<div class="option"><span>${option}</span></div>`)
    .join("");
  optionList.innerHTML = optionTag;

  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.setAttribute("onClick", "optionSelected(this)");
  });
}

//objet pour correction.html
const userAnswers = []; // Exemple d'initialisation
const correctAnswers = questions.map((q) => q.answer);

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    //if answer incorrect, auto selected correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }
  // Stockage de la réponse de l'utilisateur correction.html
  userAnswers.push(userAnswer);
  correctAnswers.push(correctAnswer);

  //if user has selected, disable all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} sur ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Votre score : ${userScore} sur ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");

  let progressStartValue = -1;
  let progressEndValue = Math.floor((userScore / questions.length) * 100);
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;

    circularProgress.style.background = `conic-gradient(#dd743f ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  // Stockage de la réponse de l'utilisateur correction.html
}
// lien vers correction.html
document
  .getElementById("correction-link")
  .addEventListener("click", function (e) {
    // Empêcher le comportement par défaut du lien
    e.preventDefault();

    // Effectuer des actions avant d'ouvrir la nouvelle page
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    sessionStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
    sessionStorage.setItem("questions", JSON.stringify(questions));

    // Ouvrir la page de correction dans un nouvel onglet
    window.open("correction.html", "_blank");
  });

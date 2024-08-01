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
  //nouveau code
  userAnswers.length = 0; // Vider l'array des réponses utilisateur
  correctAnswers.length = 0;
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    nextBtn.classList.remove("active");

    questionNumb++;
    questionCounter(questionNumb);
  } else {
    showResultBox();
  }
};

const optionList = document.querySelector(".option-list");

//getting questions and optiond from array

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onClick", "optionSelected(this)");
  }
  const imgBtn = document.querySelector(".img-btn");

  // Simule la condition d'affichage
  if (index === 1) {
    imgBtn.classList.add("active");
    setTimeout(() => {
      imgBtn.classList.add("visible");
    }, 10); // Délai pour appliquer l'animation de transition
  } else {
    imgBtn.classList.remove("visible");
    setTimeout(() => {
      imgBtn.classList.remove("active");
    }, 300); // Doit correspondre à la durée de la transition CSS
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const imgBtn = document.querySelector(".img-btn");
  const popupContent = document.querySelector(".popup-content");
  const closeBtn = document.querySelector(".close-btn");
  const nextBtn = document.querySelector(".next-btn"); // Bouton suivant
  const tryAgainBtn = document.querySelector(".tryagain-btn"); // Bouton "Try Again"

  // Fonction pour afficher ou fermer la popup
  function togglePopup(show) {
    popupContent.classList.toggle("active", show);
  }

  // Fermer la popup en cliquant sur le bouton de fermeture
  closeBtn.addEventListener("click", () => togglePopup(false));

  // Fermer la popup en cliquant en dehors d'elle
  window.addEventListener("click", (event) => {
    if (event.target === popupContent) togglePopup(false);
  });

  // Fonction pour ouvrir la popup
  function openPopup() {
    togglePopup(true);
  }

  // Fonction pour mettre à jour l'état de l'interface selon la question
  function onQuestionChange(index) {
    const isQuestionTwo = index === 1;

    imgBtn.classList.toggle("active", isQuestionTwo);

    // Réinitialiser les écouteurs d'événements
    imgBtn.removeEventListener("click", openPopup);

    if (isQuestionTwo) {
      imgBtn.addEventListener("click", openPopup);
    } else {
      togglePopup(false); // Ferme la popup si ce n'est pas la question 2
    }
  }

  // Fermer la popup lorsqu'on passe à la question suivante
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      togglePopup(false);
      // Exemple de logique pour changer de question
      // onQuestionChange(newQuestionIndex);
    });
  }

  // Redémarrer le quiz en cliquant sur le bouton "Try Again"
  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", () => {
      // Réinitialiser le quiz à la première question ou état initial
      // Par exemple : onQuestionChange(0); // Pour revenir à la première question

      // Assurez-vous de fermer la popup et de réinitialiser l'état si nécessaire
      togglePopup(false);

      // Réinitialisation des écouteurs d'événements pour imgBtn
      imgBtn.removeEventListener("click", openPopup);
      onQuestionChange(1); // Appel initial pour remettre l'état de la question 2
    });
  }

  // Exemple d'appel de la fonction pour une question spécifique
  onQuestionChange(1); // Appel initial pour la question numéro 2 (à remplacer selon votre logique)
});
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

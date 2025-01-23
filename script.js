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
let shouldShuffle = false;

questions = questions.map((q, index) => ({
  ...q,
  id: index + 1, // Identifiant unique basé sur l'ordre initial
}));

// Copie de sauvegarde des questions initiales
const originalQuestions = [...questions];

questions.forEach((q, index) => {
  if (q.image && typeof q.image !== "string") {
  }
});

function resetQuizState() {
  // Réinitialiser les questions dans leur ordre initial
  questions = [...originalQuestions];

  // Recalculer les indices des popups
  popupQuestionIndices = questions
    .map((q, index) => (q.image ? index : -1))
    .filter((index) => index !== -1);

  // Réinitialiser les réponses correctes
  correctAnswers = questions.map((q) => q.answer);

  // Réinitialiser les réponses utilisateur
  userAnswers.length = 0;

  // Réinitialiser les variables de contrôle du quiz
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
}

// Fonction pour mélanger et inverser les questions
function shuffleAndReverseQuestions() {
  if (shouldShuffle) {
    const shuffledQuestions = [...originalQuestions]
      .map((q, index) => ({ ...q, originalIndex: index }))
      .sort(() => Math.random() - 0.5)
      .reverse();

    questions = shuffledQuestions;

    recalculatePopupIndices(); // Recalcul des indices des popups
  } else {
    resetQuestionsToOriginalOrder();
  }
}

function recalculatePopupIndices() {
  popupQuestionIndices = questions
    .map((q, index) => (q.image ? index : -1)) // Garder uniquement les questions avec des images
    .filter((index) => index !== -1); // Filtrer les indices invalides
}

// Fonction pour réinitialiser l'ordre des questions
function resetQuestionsToOriginalOrder() {
  questions = [...originalQuestions];
  recalculatePopupIndices(); // Recalcul des indices des popups après réinitialisation
}

// Tableau des indices des questions pour afficher la popup
let popupQuestionIndices = [1, 2, 3, 8, 14];

// Déclaration globale des réponses correctes et des réponses utilisateur
let correctAnswers = [];
const userAnswers = [];

// Fonctions pour gérer l'affichage de la popup
function togglePopup(show) {
  popupContent.classList.toggle("active", show);
}

function openPopup() {
  togglePopup(true);
}

function onQuestionChange(index) {
  // Réinitialiser l'état du bouton image
  imgBtn.classList.remove("visible", "active");
  imgBtn.removeEventListener("click", openPopup);

  const showPopup = popupQuestionIndices.includes(index);

  const question = questions[index];

  // Vérifier si la question a une image valide
  if (!question || !question.image) {
    return;
  }

  // Ajouter l'image à la popup si nécessaire
  if (showPopup) {
    const popupImg = document.querySelector(".popup-content img");
    if (popupImg) {
      popupImg.src = question.image;

      imgBtn.classList.add("active");
      setTimeout(() => {
        imgBtn.classList.add("visible");
      }, 10); // Ajouter un délai pour une transition fluide
    }

    imgBtn.addEventListener("click", openPopup);
  }
}

// Initialisation et gestion des événements
document.addEventListener("DOMContentLoaded", () => {
  // Initialisation des réponses correctes ici après le chargement des questions
  correctAnswers = questions.map((q) => q.answer);

  startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
  };

  exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    resetQuizState(); // Réinitialise toutes les variables globales et l'ordre des questions
    sessionStorage.clear(); // Efface toutes les données de session pour un état propre
  };

  continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");

    shouldShuffle = false;

    resetQuestionsToOriginalOrder(); // Réinitialiser l'ordre normal des questions

    showQuestions(0);
    questionCounter(1);
    headerScore();
    onQuestionChange(0);
  };
  tryAgainBtn.onclick = () => {
    sessionStorage.clear();
    resetQuizState();
    // Activer le mélange des questions
    shouldShuffle = true;

    // Mélanger les questions
    shuffleAndReverseQuestions();

    // Réinitialiser les réponses correctes après le mélange
    correctAnswers = questions.map((q) => q.answer);

    // Réinitialiser les variables de contrôle du quiz
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    userAnswers.length = 0; // Réinitialiser les réponses utilisateur

    // Réinitialiser l'interface utilisateur
    quizBox.classList.add("active");
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");
    imgBtn.classList.remove("active", "visible", "inactive");
    imgBtn.removeEventListener("click", openPopup);

    // Afficher la première question
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
    onQuestionChange(0);
  };

  goHomeBtn.onclick = () => {
    // Réinitialiser tout l'état du quiz
    resetQuizState();
    sessionStorage.clear();
    correctAnswers = questions.map((q) => q.answer); // Réinitialiser les réponses correctes
    quizSection.classList.remove("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    imgBtn.classList.remove("active", "visible", "inactive");
    imgBtn.removeEventListener("click", openPopup);

    showQuestions(questionCount);
    questionCounter(questionNumb);
    userAnswers.length = 0; // Réinitialiser les réponses utilisateur

    onQuestionChange(0);
  };

  nextBtn.onclick = () => {
    imgBtn.classList.remove("active", "visible"); // Réinitialiser avant de changer de question
    imgBtn.classList.add("inactive");

    setTimeout(() => {
      togglePopup(false);

      if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove("active");

        imgBtn.classList.remove("inactive");
        onQuestionChange(questionCount); // Mettre à jour les images pour la nouvelle question
      } else {
        showResultBox();
      }
    }, 200);
  };

  closeBtn.addEventListener("click", () => togglePopup(false));
  window.addEventListener("click", (event) => {
    if (event.target === popupContent) togglePopup(false);
  });
});

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");

  // Masquer la question actuelle avec une transition
  questionText.classList.remove("active");

  // Changer la question
  setTimeout(() => {
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = questions[index].options
      .map((option) => `<div class="option"><span>${option}</span></div>`)
      .join("");
    optionList.innerHTML = optionTag;

    // Ajouter la transition pour afficher la nouvelle question
    questionText.classList.add("active");

    const options = document.querySelectorAll(".option");

    // Afficher chaque option avec un délai progressif (incluant la première)
    options.forEach((option, i) => {
      // Ajouter un léger délai même pour la première option
      setTimeout(() => {
        option.classList.add("show"); // Appliquer la classe 'show' pour déclencher la transition
      }, i * 100 + 100); // Délai de 0.1s + 0.1s pour la première, puis progressif
    });

    // Ajouter les gestionnaires d'événements pour les nouvelles options
    options.forEach((option) => {
      option.setAttribute("onClick", "optionSelected(this)");
    });
  }, 200); // Délai de 0.1 seconde avant d'afficher la nouvelle question et les options
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  // le reste du code...
  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    // Afficher la bonne réponse sans que les autres options disparaissent
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAnswer) {
        optionList.children[i].classList.add("correct");
        optionList.children[i].classList.add("show"); // S'assurer que la bonne réponse reste visible
      }
    }

    // Désactiver toutes les options après la sélection
    for (let i = 0; i < allOptions; i++) {
      optionList.children[i].classList.add("disabled");
    }

    nextBtn.classList.add("active");
  }

  // Stockage de la réponse de l'utilisateur pour correction.html
  userAnswers.push(userAnswer);

  // Désactiver toutes les options après la sélection
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
    sessionStorage.setItem("userScore", userScore);
    sessionStorage.setItem("totalQuestions", questions.length);

    // Ouvrir la page de correction dans un nouvel onglet
    setTimeout(() => {
      window.open("correctionwindows.html", "_blank");
    }, 100);
  });

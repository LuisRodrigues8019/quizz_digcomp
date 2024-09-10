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
const popupQuestionIndices = [0, 3, 12, 15, 16, 17, 18, 19];

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
  const showPopup = popupQuestionIndices.includes(index);
  const question = questions[index];

  if (showPopup && question.image) {
    // Vérifier que l'élément imgBtn existe
    if (!imgBtn) {
      return;
    }

    // Mettre à jour l'image dans la popup
    const popupImg = document.querySelector(".popup-content img");
    if (popupImg) {
      popupImg.src = question.image;

      // Ajouter la classe 'active' pour afficher le bouton image
      imgBtn.classList.add("active");
      setTimeout(() => {
        imgBtn.classList.add("visible"); // Ajouter la classe 'visible' après un léger délai
      }, 10); // Petit délai pour permettre l'animation
    }

    // S'assurer que l'événement de clic pour ouvrir la popup est bien ajouté
    imgBtn.addEventListener("click", openPopup);
  } else {
    // Si la question ne nécessite pas de popup, cacher le bouton image immédiatement
    imgBtn.classList.remove("visible");
    imgBtn.classList.remove("active");

    // Retirer l'événement de clic pour éviter les comportements inattendus
    imgBtn.removeEventListener("click", openPopup);
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
    correctAnswers = questions.map((q) => q.answer); // Réinitialiser les réponses correctes
    quizBox.classList.add("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    imgBtn.classList.remove("active", "visible", "inactive");
    imgBtn.removeEventListener("click", openPopup);
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
    userAnswers.length = 0; // Réinitialiser les réponses utilisateur

    onQuestionChange(0);
  };

  goHomeBtn.onclick = () => {
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
    // Ajouter transition pour cacher l'image
    imgBtn.classList.remove("active");
    imgBtn.classList.add("inactive");

    setTimeout(() => {
      togglePopup(false);

      if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove("active");

        // Ajouter la transition pour afficher le bouton image avec un léger délai
        imgBtn.classList.remove("inactive");
        imgBtn.classList.add("active");
        onQuestionChange(questionCount);
      } else {
        showResultBox();
      }
    }, 200); // Utiliser un seul délai global pour la transition complète
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
    questionText.innerHTML = `${questions[index].numb}. ${questions[index].question}`;

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
      window.open("correctionreseaux.html", "_blank");
    }, 100);
  });

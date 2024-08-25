const questions = [
  {
    numb: 1,
    question: "Qu’est-ce que le hardware ?",
    answer:
      "A. Il s’agit des composants de l’ordinateur permettant de le faire fonctionner",
    options: [
      "A. Il s’agit des composants de l’ordinateur permettant de le faire fonctionner",
      "B. Ce sont les programmes de l’ordinateur",
      "C. Ce sont les fichiers de l’ordinateur",
      "D. Ce sont les dossiers de l’ordinateur",
    ],
  },
  {
    numb: 2,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "C. Processeur",
    options: [
      "A. Carte graphique",
      "B. Carte mère",
      "C. Processeur",
      "D. Disque dur",
    ],
    image: "images/processeur.png",
  },
  {
    numb: 3,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "B. Carte mère",
    options: [
      "A. Carte graphique",
      "B. Carte mère",
      "C. Processeur",
      "D. Disque dur",
    ],
    image: "images/carte-mere.png",
  },
  {
    numb: 4,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "A. Carte graphique",
    options: [
      "A. Carte graphique",
      "B. Carte mère",
      "C. Processeur",
      "D. Disque dur",
    ],
    image: "images/carte-graphique.png",
  },
  {
    numb: 5,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "D. Disque dur",
    options: [
      "A. Carte graphique",
      "B. Carte mère",
      "C. Processeur",
      "D. Disque dur",
    ],
    image: "images/disquedur.png",
  },
  {
    numb: 6,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "A. Unité centrale",
    options: ["A. Unité centrale", "B. Clavier", "C. Souris", "D. Ecran"],
    image: "images/unite-centrale.png",
  },
  {
    numb: 7,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "B. Clavier",
    options: ["A. Unité centrale", "B. Clavier", "C. Souris", "D. Ecran"],
    image: "images/clavier.png",
  },
  {
    numb: 8,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "C. Souris",
    options: ["A. Unité centrale", "B. Clavier", "C. Souris", "D. Ecran"],
    image: "images/souris.png",
  },
  {
    numb: 9,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "D. Ecran",
    options: ["A. Unité centrale", "B. Clavier", "C. Souris", "D. Ecran"],
    image: "images/ecran.png",
  },
  {
    numb: 10,
    question: "Quel composant de l’ordinateur est visible dans l’image ?",
    answer: "C. Mémoire ram",
    options: [
      "A. Carte graphique",
      "B. Carte mère",
      "C. Mémoire ram",
      "D. Disque dur",
    ],
    image: "images/ram.png",
  },

  {
    numb: 11,
    question:
      "Quelle est la différence entre un disque SSD et un disque dur HDD ?",
    answer: "A. Le Disque SDD est plus rapide",
    options: [
      "A. Le Disque SDD est plus rapide",
      "B. Le Disque SDD est plus lent",
      "C. Le Disque SDD est plus fragile",
      "D. Le Disque SDD est moins durable",
    ],
  },

  {
    numb: 12,
    question: "Quelle connectique est visible dans l'image ?",
    answer: "B. Hdmi",
    options: ["A. Vga", "B. Hdmi", "C. Displayport", "D. Dvi"],
    image: "images/hdmi.png",
  },

  {
    numb: 13,
    question: "Quelle connectique est visible dans l'image ?",
    answer: "A. Vga",
    options: ["A. Vga", "B. Hdmi", "C. Displayport", "D. Dvi"],
    image: "images/vga.png",
  },

  {
    numb: 14,
    question: "Quelle connectique est visible dans l'image ?",
    answer: "C. Displayport",
    options: ["A. Vga", "B. Hdmi", "C. Displayport", "D. Dvi"],
    image: "images/displayport.png",
  },
  {
    numb: 15,
    question: "Quelle connectique est visible dans l'image ?",
    answer: "D. Dvi",
    options: ["A. Vga", "B. Hdmi", "C. Displayport", "D. Dvi"],
    image: "images/dvi.png",
  },
  {
    numb: 16,
    question: "Quelle connectique est visible dans l'image ?",
    answer: "D. Câble Ethernet",
    options: ["A. Vga", "B. Hdmi", "C. Displayport", "D. Câble Ethernet"],
    image: "images/ethernet.png",
  },
  {
    numb: 17,
    question: "Quel type de périphériques sont visibles dans l’image ?",
    answer: "A. Périphériques d’entrée",
    options: [
      "A. Périphériques d’entrée",
      "B. Périphériques de sortie",
      "C. Périphériques d’entrée et de sortie",
      "D. Aucune de ces réponses",
    ],
    image: "images/peripherique-entree.png",
  },
  {
    numb: 18,
    question: "Quel type de périphériques sont visibles dans l’image ?",
    answer: "B. Périphériques de sortie",
    options: [
      "A. Périphériques d’entrée",
      "B. Périphériques de sortie",
      "C. Périphériques d’entrée et de sortie",
      "D. Aucune de ces réponses",
    ],
    image: "images/peripherique-sortie.png",
  },
  {
    numb: 19,
    question: "Quel type de périphériques sont visibles dans l’image ?",
    answer: "C. Périphériques d’entrée et de sortie",
    options: [
      "A. Périphériques d’entrée",
      "B. Périphériques de sortie",
      "C. Périphériques d’entrée et de sortie",
      "D. Aucune de ces réponses",
    ],
    image: "images/peripheriques-multi.png",
  },
  {
    numb: 20,
    question:
      "Sur quel composant les données de l'ordinateur sont-elles stockées de manière permanente ?",
    answer: "B. Disque dur",
    options: [
      "A. Mémoire ram",
      "B. Disque dur",
      "C. Carte mère",
      "D. Processeur",
    ],
  },
];

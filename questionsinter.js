const questions = [
  {
    numb: 1,
    question: "Qu’est ce que Internet ?",
    answer: "A. Un réseau mondial d'ordinateurs interconnectés",
    options: [
      "A. Un réseau mondial d'ordinateurs interconnectés",
      "B. Un navigateur web",
      "C. Une application",
      "D. Une chaine YouTube",
    ],
  },
  {
    numb: 2,
    question: "Qu’est ce que le World Wide Web ?",
    answer: "C. Un système de pages web liées par des hyperliens",
    options: [
      "A. Un logiciel de traitement de texte",
      "B. Un jeu vidéo en ligne",
      "C. Un système de pages web liées par des hyperliens",
      "D. Un réseau social",
    ],
  },
  {
    numb: 3,
    question: "Qui est l’inventeur du World Wide Web ?",
    answer: "B. Tim Berners-Lee",
    options: [
      "A. Bill Gates",
      "B. Tim Berners-Lee",
      "C. Steve Jobs",
      "D. Mark Zuckerberg",
    ],
  },
  {
    numb: 4,
    question: "Que signifie le “S” de HTTPS ?",
    answer: "B. Sécurisé",
    options: ["A. Service", "B. Sécurisé", "C. Systéme", "D. Server"],
  },
  {
    numb: 5,
    question: "Qu'est-ce qu'une URL ?",
    answer: "A. Adresse par laquelle un site est accessible",
    options: [
      "A. Adresse par laquelle un site est accessible",
      "B. Un numéro de téléphone",
      "C. Un document Word",
      "D. Un code QR",
    ],
  },
  {
    numb: 6,
    question: "Quel est le site officiel du gouvernement belge ?",
    answer: "D. https://www.belgium.be",
    options: [
      "A. https://www.belgium.gouvernement.be",
      "B. https://www.gourvernement.be",
      "C. https://www.gov.belgium.be",
      "D. https://www.belgium.be",
    ],
  },
  {
    numb: 7,
    question: "Qu’est ce que 3D secure ?",
    answer: "A. Technologie d'authentification pour les paiements sur Internet",
    options: [
      "A. Technologie d'authentification pour les paiements sur Internet",
      "B. Un logiciel de modélisation 3D",
      "C. Un service de streaming",
      "D. Un antivirus",
    ],
  },
  {
    numb: 8,
    question: "C’est quoi le protocole FTP ?",
    answer: "B. Protocole de transfert de fichiers",
    options: [
      "A. Un service de streaming vidéo",
      "B. Protocole de transfert de fichiers",
      "C. Un navigateur web",
      "D. Un protocole qui crypte les messages",
    ],
  },
  {
    numb: 9,
    question:
      "Lequel de ces mots de passe est considéré comme étant sécurisé ?",
    answer: "C. AbhnM20@##!",
    options: [
      "A. 1234",
      "B. Le nom de mon chat",
      "C. AbhnM20@##!",
      "D. Un nom de fleur",
    ],
  },
  {
    numb: 10,
    question: "Qu’est-ce qu’un cookie ?",
    answer: "D. Petit fichier texte stocké sur un ordinateur par un site web",
    options: [
      "A. Une friandise numérique",
      "B. Un type de fichier multimédia",
      "C. Un programme de protection contre les virus",
      "D. Petit fichier texte stocké sur un ordinateur par un site web",
    ],
  },
  {
    numb: 11,
    question: "Qu’est-ce qu’un spyware ?",
    answer: "C. Programme qui vole des données personnelles sans consentement",
    options: [
      "A. Un programme qui détruit les fichiers",
      "B. Un dispositif de stockage USB",
      "C. Programme qui vole des données personnelles sans consentement",
      "D. Un antivirus",
    ],
  },

  {
    numb: 12,
    question: "Qu’est-ce qu’un scareware ?",
    answer:
      "A. Logiciel malveillant qui vend un logiciel via de fausses alertes",
    options: [
      "A. Logiciel malveillant qui vend un logiciel via de fausses alertes",
      "B. Un outil de cryptage",
      "C. Un mot inventé par Jean Claude Van Damme",
      "D. Un type de virus",
    ],
  },

  {
    numb: 13,
    question: "Qu’est-ce qu’un phishing ou hameçonnage ?",
    answer:
      "B. Tentative de vol d'infos sensibles en se faisant passer pour une source fiable",
    options: [
      "A. Une méthode pour stocker des fichiers",
      "B. Tentative de vol d'infos sensibles en se faisant passer pour une source fiable",
      "C. Protocole de sécurité",
      "D. Une technique de piratage",
    ],
  },

  {
    numb: 14,
    question: "Qu’est-ce qu’un cheval de troie ?",
    answer: "A. Un logiciel malveillant déguisé en programme utile",
    options: [
      "A. Un logiciel malveillant déguisé en programme utile",
      "B. un logiciel antivirus",
      "C. un appareil qui accélère la connexion internet",
      "D. un pare-feu de sécurité",
    ],
  },

  {
    numb: 15,
    question: "Qu’est-ce que un Hoax ?",
    answer: "C. Un canular ou une fausse information diffusée en ligne",
    options: [
      "A. Un nouveau modèle d'ordinateur",
      "B. une technologie de communication sans fil",
      "C. Un canular ou une fausse information diffusée en ligne",
      "D. Un type de piratage informatique",
    ],
  },
  {
    numb: 16,
    question: "Qu’est-ce qu’un scam 419 ?",
    answer:
      "D. Arnaque par email promettant de l'argent contre un paiement préalable",
    options: [
      "A. Une méthode de piratage par phishing",
      "B. Un programme antivirus frauduleux",
      "C. Un nouveau type de virus informatique",
      "D. Arnaque par email promettant de l'argent contre un paiement préalable",
    ],
  },
  {
    numb: 17,
    question: "Qu’est-ce qu’un avatar ?",
    answer:
      "C. Une image choisie comme profil sur un forum ou un réseau social",
    options: [
      "A. Un film de science-fiction",
      "B. Un emoji",
      "C. Une image choisie comme profil sur un forum ou un réseau social",
      "D. Un réseau social",
    ],
  },
  {
    numb: 18,
    question: "Quel logo est représenté par un avatar dans l'image ?",
    answer: "A. Option 1",
    options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    image: "images/avatar.png",
  },
  {
    numb: 19,
    question:
      "Quel est le nom du logiciel nécessaire pour se connecter à Internet ?",
    answer: "B. Navigateur web",
    options: ["A. Facebook", "B. Navigateur web", "C. Windows", "D. Word"],
  },
  {
    numb: 20,
    question: "Qu’est-ce qu’un freeware ?",
    answer: "C. Un logiciel gratuit",
    options: [
      "A. Un antivirus",
      "B. Un logiciel tableur",
      "C. Un logiciel gratuit",
      "D. Un logiciel payant",
    ],
  },
  {
    numb: 21,
    question: "Quelle technologie permet de se connecter à Internet ?",
    answer: "B. 3G 4G Hotspot wifi",
    options: [
      "A. Le voip",
      "B. 3G 4G Hotspot wifi",
      "C. Le minitel",
      "D. Le streaming",
    ],
  },
  {
    numb: 22,
    question:
      "Comment vérifier si une page d'achat sur internet est sécurisée ?",
    answer: "D. L’URL commence par https://",
    options: [
      "A. Regarder si le logo du site est visible en haut",
      "B. S'assurer que la page se charge rapidement",
      "C. L’URL commence par http://",
      "D. L’URL commence par https://",
    ],
  },
  {
    numb: 23,
    question:
      "Quelle application web est dédiée au partage de photos et vidéos ?",
    answer: "C. Instagram",
    options: ["A. Waze", "B. Deezer", "C. Instagram", "D. Shazam"],
  },

  {
    numb: 24,
    question:
      "Dans l’image, quelle application n’est pas un navigateur internet ?",
    answer: "C. Windows 10",
    options: [
      "A. Google Chrome",
      "B. Microsoft Edge",
      "C. Windows 10",
      "D. Firefox",
    ],
    image: "images/navigateur.png",
  },

  {
    numb: 25,
    question: "Dans l’image, quelle zone permet de saisir une recherche ?",
    answer: "C. Zone 1",
    options: ["A. Zone 2", "B. Zone 3", "C. Zone 1", "D. Zone 4"],
    image: "images/rechercheinternet.png",
  },

  {
    numb: 26,
    question:
      "Dans l'image, quelle application n’est pas un service de Cloud ?",
    answer: "A. Wikipédia",
    options: ["A. Wikipédia", "B. Onedrive", "C. Google Drive", "D. Dropbox"],
    image: "images/cloud.png",
  },

  {
    numb: 27,
    question:
      "Comment accélérer le téléchargement lent d’un film sur mon ordinateur ?",
    answer: "B. Passer à la fibre",
    options: [
      "A. Utilisez deux câbles Ethernet",
      "B. Passer à la fibre",
      "C. Téléchargez la nuit",
      "D. Installez un antivirus pour accélérer",
    ],
  },

  {
    numb: 28,
    question:
      "Quel principe garantit l'absence de discrimination des informations sur Internet, peu importe leur source, destination ou contenu ?",
    answer: "D. La neutralité du net",
    options: [
      "A. La centralisation des données",
      "B. La priorisation des contenus populaires",
      "C. Le filtrage par les fournisseurs d'accès",
      "D. La neutralité du net",
    ],
  },
];

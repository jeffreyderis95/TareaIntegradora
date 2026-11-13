const images = [
  {
    imageSrc: "images/past/auto-frueher.jpg",
    caption: "das Auto Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/bahn-frueher.jpg",
    caption: "die Bahn Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/buero-frueher.jpg",
    caption: "das Büro Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/einkaufen-frueher.jpg",
    caption: "Einkaufen Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/energie-frueher.jpg",
    caption: "die Energie Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/medizin-frueher.jpg",
    caption: "die Medizin Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/schule-frueher.jpg",
    caption: "die Schule Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/stadtverkehr-frueher.jpg",
    caption: "der Stadtverkehr Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/past/telefon-frueher.jpg",
    caption: "das Telefon Früher",
    pastOrToday: "past",
  },
  {
    imageSrc: "images/present/auto-heute.jpg",
    caption: "das Auto Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/bahn-heute.jpg",
    caption: "die Bahn Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/buero-heute.jpg",
    caption: "das Büro Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/einkaufen-heute.jpg",
    caption: "Einkaufen Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/energie-heute.jpg",
    caption: "die Energie Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/medizin-heute.jpg",
    caption: "die Medizin Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/schule-heute.jpg",
    caption: "die Schule Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/stadtverkehr-heute.jpg",
    caption: "der Stadtverkehr Heute",
    pastOrToday: "present",
  },
  {
    imageSrc: "images/present/telefon-heute.jpg",
    caption: "das Telefon Heute",
    pastOrToday: "present",
  },
];
shuffle(images);
let currentImage = images.pop();
let progress = 1;
const currentImageContainer = document.querySelector(".current-image");
currentImageContainer.querySelector("img").src = currentImage.imageSrc;
const progressCounter = document.querySelector(".progress");
document.querySelector(".before").addEventListener("click", function () {
  if (currentImage.pastOrToday === "present") {
    alert("Nein, versuch es noch mal!");
  } else {
    const imgElement = document.createElement("img");
    imgElement.src = currentImage.imageSrc;
    document.querySelector(".image-answers.past").append(imgElement);
    currentImage = images.pop();
    currentImageContainer.querySelector("img").src = currentImage.imageSrc;
    progress++;
    progressCounter.textContent = progress + "/18";
  }
});
document.querySelector(".heute").addEventListener("click", function () {
  if (currentImage.pastOrToday === "past") {
    alert("Nein, versuch es noch mal!");
  } else {
    const imgElement = document.createElement("img");
    imgElement.src = currentImage.imageSrc;
    document.querySelector(".image-answers.present").append(imgElement);
    currentImage = images.pop();
    currentImageContainer.querySelector("img").src = currentImage.imageSrc;
    progress++;
    progressCounter.textContent = progress + "/18";
  }
});
// End Game 1

// Game 2 stars  - Sentence Builder
const wordsContainer = document.querySelector(".sentence-builder-game .words");
const sentenceContainer = document.querySelector(".sentence-builder-game .sentence");
wordsContainer.innerHTML = "";

const sentences = [
  {
    sentence: "Früher haben viele Leute unter sehr schlechten Bedingungen gearbeitet",
    variations: [
      "Früher haben viele Leute unter sehr schlechten Bedingungen gearbeitet",
      "Früher haben unter sehr schlechten Bedingungen viele Leute gearbeitet",
      "Viele Leute haben früher unter sehr schlechten Bedingungen gearbeitet",
      "Viele Leute haben unter sehr schlechten Bedingungen früher gearbeitet",
      "Unter sehr schlechten Bedingungen haben früher viele Leute gearbeitet",
      "Unter sehr schlechten Bedingungen haben viele Leute früher gearbeitet",
    ],
  },
  {
    sentence: "Früher mussten die Menschen viele Tätigkeiten von Hand erledigen",
    variations: [
      "Früher mussten die Menschen viele Tätigkeiten von Hand erledigen",
      "Früher mussten die Menschen von Hand viele Tätigkeiten erledigen",
      "Die Menschen mussten früher viele Tätigkeiten von Hand erledigen",
      "Die Menschen mussten viele Tätigkeiten früher von Hand erledigen",
      "Von Hand mussten die Menschen früher viele Tätigkeiten erledigen",
      "Viele Tätigkeiten mussten die Menschen früher von Hand erledigen",
    ],
  },
  {
    sentence: "Im Vergleich zu früher hat sich im Bereich der Medizin viel verändert",
    variations: [
      "Im Vergleich zu früher hat sich im Bereich der Medizin viel verändert",
      "Im Vergleich zu früher hat sich viel im Bereich der Medizin verändert",
      "Im Bereich der Medizin hat sich im Vergleich zu früher viel verändert",
      "Im Bereich der Medizin hat sich viel im Vergleich zu früher verändert",
      "Viel hat sich im Vergleich zu früher im Bereich der Medizin verändert",
      "Viel hat sich im Bereich der Medizin im Vergleich zu früher verändert",
    ],
  },
  {
    sentence: "Im Gegensatz zu früher benutzen die Menschen heute häufig Computer und das Internet",
    variations: [
      "Im Gegensatz zu früher benutzen die Menschen heute häufig Computer und das Internet",
      "Die Menschen benutzen heute im Gegensatz zu früher häufig Computer und das Internet",
      "Heute benutzen die Menschen im Gegensatz zu früher häufig Computer und das Internet",
      "Im Gegensatz zu früher benutzen heute die Menschen häufig Computer und das Internet",
      "Computer und das Internet benutzen die Menschen heute häufig im Gegensatz zu früher",
      "Die Menschen benutzen im Gegensatz zu früher heute häufig Computer und das Internet",
    ],
  },
  {
    sentence: "Früher war in der Schule Disziplin viel wichtiger",
    variations: [
      "Früher war in der Schule Disziplin viel wichtiger",
      "Früher war Disziplin in der Schule viel wichtiger",
      "In der Schule war früher Disziplin viel wichtiger",
      "In der Schule war Disziplin früher viel wichtiger",
      "Disziplin war früher in der Schule viel wichtiger",
      "Disziplin war in der Schule früher viel wichtiger",
    ],
  },
  {
    sentence: "Zum Glück arbeiten heute viele Menschen unter besseren Bedingungen",
    variations: [
      "Zum Glück arbeiten heute viele Menschen unter besseren Bedingungen",
      "Zum Glück arbeiten viele Menschen heute unter besseren Bedingungen",
      "Heute arbeiten zum Glück viele Menschen unter besseren Bedingungen",
      "Heute arbeiten viele Menschen zum Glück unter besseren Bedingungen",
      "Viele Menschen arbeiten heute zum Glück unter besseren Bedingungen",
      "Viele Menschen arbeiten zum Glück heute unter besseren Bedingungen",
      "Unter besseren Bedingungen arbeiten heute zum Glück viele Menschen",
      "Unter besseren Bedingungen arbeiten zum Glück heute viele Menschen",
    ],
  },
  {
    sentence: "Heute erledigen oft Roboter die monotonen Tätigkeiten",
    variations: [
      "Heute erledigen oft Roboter die monotonen Tätigkeiten",
      "Heute erledigen Roboter oft die monotonen Tätigkeiten",
      "Roboter erledigen heute oft die monotonen Tätigkeiten",
      "Roboter erledigen oft heute die monotonen Tätigkeiten",
      "Oft erledigen Roboter heute die monotonen Tätigkeiten",
      "Oft erledigen heute Roboter die monotonen Tätigkeiten",
      "Die monotonen Tätigkeiten erledigen heute oft Roboter",
      "Die monotonen Tätigkeiten erledigen oft Roboter heute",
    ],
  },
  {
    sentence: "Heute gibt es moderne medizinische Geräte",
    variations: [
      "Heute gibt es moderne medizinische Geräte",
      "Es gibt heute moderne medizinische Geräte",
      "Moderne medizinische Geräte gibt es heute",
    ],
  },
  {
    sentence: "Heute können Ärzte viele Krankheiten besser behandeln",
    variations: [
      "Heute können Ärzte viele Krankheiten besser behandeln",
      "Ärzte können heute viele Krankheiten besser behandeln",
      "Ärzte können viele Krankheiten heute besser behandeln",
      "Viele Krankheiten können Ärzte heute besser behandeln",
      "Viele Krankheiten können heute Ärzte besser behandeln",
    ],
  },
  {
    sentence: "Heute sind die Strafen in vielen Schulen weniger streng als früher",
    variations: [
      "Heute sind die Strafen in vielen Schulen weniger streng als früher",
      "Heute sind in vielen Schulen die Strafen weniger streng als früher",
      "Die Strafen sind heute in vielen Schulen weniger streng als früher",
      "Die Strafen sind in vielen Schulen heute weniger streng als früher",
      "In vielen Schulen sind heute die Strafen weniger streng als früher",
      "In vielen Schulen sind die Strafen heute weniger streng als früher",
    ],
  },
];

shuffle(sentences);
let currentSentence = sentences.pop();
const words = currentSentence.sentence.split(" ");
shuffle(words);
wordsContainer.innerHTML = "";
for (const word of words) {
  const wordElement = document.createElement("div");
  wordElement.classList.add("word");
  wordElement.textContent = word;
  wordsContainer.append(wordElement);
}
wordsContainer.addEventListener("click", function (event) {
  if (event.target.matches("div.word")) {
    const clickedWord = event.target.cloneNode(true);
    event.target.remove();
    sentenceContainer.append(clickedWord);
  }
});
sentenceContainer.addEventListener("click", function (event) {
  if (event.target.matches("div.word")) {
    const clickedWord = event.target.cloneNode(true);
    event.target.remove();
    wordsContainer.append(clickedWord);
  }
});
document.querySelector(".check-answer").addEventListener("click", function () {
  const useWords = document.querySelectorAll(".sentence .word");
  if (userAnswerIsCorrect(useWords)) {
    alert("Gut gemacht! Nächster Satz!");
    currentSentence = sentences.pop();
    const words = currentSentence.sentence.split(" ");
    shuffle(words);
    wordsContainer.innerHTML = "";
    sentenceContainer.innerHTML = "";
    for (const word of words) {
      const wordElement = document.createElement("div");
      wordElement.classList.add("word");
      wordElement.textContent = word;
      wordsContainer.append(wordElement);
    }
  } else {
    alert("Nein, versuch es noch mal!");
  }
});
function userAnswerIsCorrect(useWords) {
  for (const variation of currentSentence.variations) {
    if (sentenceIsCorrect(useWords, variation)) {
      return true;
    }
  }
  return false;
}
function sentenceIsCorrect(useWords, sentence) {
  const sentenceWords = sentence.split(" ");
  if (useWords.length !== sentenceWords.length) {
    return false;
  }
  for (let index = 0; index < useWords.length; index++) {
    const useWord = useWords[index];
    const correctWord = sentenceWords[index];
    if (useWord.textContent.toLowerCase() !== correctWord.toLowerCase()) {
      return false;
    }
  }
  return true;
}

// End Game 2

// Shared functions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

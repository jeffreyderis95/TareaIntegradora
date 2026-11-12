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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

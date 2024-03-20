/* Interactivité du menu burger YD*/
const burgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".curtainNavigation");

burgerButton.addEventListener("click", toggleNav);
function toggleNav() {
  burgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

/* Création et agrégation des régions sur la landing page par ajout d'un objet dans le tableau si nécessaire YD*/
const regionArray = [
  {
    name: "Grand Ouest",
    img: "./ressources/images/crepes.jpg",
  },
  {
    name: "Sud Ouest",
    img: "./ressources/images/canneles.jpg",
  },
  {
    name: "Grand Est",
    img: "./ressources/images/bretzel.jpg",
  },
];

const regionPresentation = document.querySelector(".region-selection");
function createRegion(regions) {
  regions.forEach((region) => {
    const regionComponent = document.createElement("div");
    regionComponent.classList.add("region-component");
    regionPresentation.appendChild(regionComponent);

    const regionComponentImage = document.createElement("img");
    regionComponentImage.classList.add("region-button");
    regionComponentImage.src = region.img;
    regionComponent.appendChild(regionComponentImage);

    const regionComponentTitle = document.createElement("h3");
    regionComponentTitle.classList.add("region-title");
    regionComponentTitle.textContent = region.name;
    regionComponent.appendChild(regionComponentTitle);
  });
}

createRegion(regionArray);
/* Fin de la fonction d'ajout de région sur la landing page YD*/

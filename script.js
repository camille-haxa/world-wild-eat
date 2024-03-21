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

/**  debut événement cardRegion  CD **/

/*selection elements */
const regionButton = document.querySelector(".region-button");
const regionComponent = document.querySelector(".region-component");
/*event listener + creation card Region*/
regionButton.addEventListener("click", createCardRegion);
let cardRegion;

function createCardRegion() {
  if (cardRegion) {
    return;
  }
  /*creation element card*/
  cardRegion = document.createElement("dialog");
  cardRegion.classList.add("region-card");
  regionComponent.appendChild(cardRegion);
  /* X button pr fermeture*/
  const closeRegionButton = document.createElement("button");
  closeRegionButton.classList.add("region-close-button");
  closeRegionButton.textContent = "X";
  cardRegion.appendChild(closeRegionButton);
  const closeCardRegion = document.querySelector(".region-card");
  const closeBtn1 = document.querySelector(".region-close-button");
  closeBtn1.addEventListener("click", function (e) {
    e.preventDefault();
    closeCardRegion.close();
  });

  // closeButton.addEventListener("click", () => {
  //   dialog.close();
  // });

  /* suite creation elements de la card Region*/
  const cardRegionHeader = document.createElement("div");
  cardRegionHeader.classList.add("region-card-header");
  cardRegion.appendChild(cardRegionHeader);

  const cardRegionImg = document.createElement("img");
  cardRegionImg.classList.add("region-card-image");
  // cardRegionImg.src = regionArray.img[i];
  cardRegionHeader.appendChild(cardRegionImg);

  const cardRegionBody = document.createElement("div");
  cardRegionBody.classList.add("region-card-body");
  cardRegion.appendChild(cardRegionBody);

  const cardRegionTitle = document.createElement("h3");
  cardRegionTitle.classList.add("card-region-title");
  // cardRegionTitle.textContent = regionArray.name[i];
  cardRegionHeader.appendChild(cardRegionTitle);

  /* creation boutons ville, campagne, coup de coeur*/
  const cardVille = document.createElement("button");
  cardVille.classList.add("card-ville", "card-restaurant");
  cardVille.textContent = "ville";
  cardRegion.appendChild(cardVille);

  const cardCampagne = document.createElement("button");
  cardCampagne.classList.add("card-campagne", "card-restaurant");
  cardCampagne.textContent = "campagne";
  cardRegion.appendChild(cardCampagne);

  const cardCoupdeCoeur = document.createElement("button");
  cardCoupdeCoeur.classList.add("card-coup-de-coeur", "card-restaurant");
  cardCoupdeCoeur.textContent = "coup de coeur";
  cardRegion.appendChild(cardCoupdeCoeur);
}

createCardRegion(regionArray[i]);

/** fin événement cardregion CD **/

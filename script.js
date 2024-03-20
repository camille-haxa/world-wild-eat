const burgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".curtainNavigation");

burgerButton.addEventListener("click", toggleNav);
function toggleNav() {
  burgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

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

// debut card Region event

//selection element pour on click
const regionButton = document.querySelector(".region-button");
//declaration function
regionButton.addEventListener("click", (createCardRegion) => {
  const cardRegion = document.createElement("div");
  cardRegion.classList.add("region-card");
  regionButton.appendChild(cardRegion); //appendchild to region button?
  const cardRegionHeader = document.createElement("div");
  cardRegionHeader.classList.add("region-card-header");
  cardRegion.appendChild(cardRegionHeader);

  const cardRegionImg = document.createElement("img");
  cardRegionImg.classList.add("region-card-image");
  cardRegionImg.src = regionArray.img;
  cardRegionHeader.appendChild(cardRegionImg);

  const cardRegionBody = document.createElement("div");
  cardRegionBody.classList.add("region-card-body");
  cardRegion.appendChild(cardRegionBody);

  const cardRegionTitle = document.createElement("h3");
  cardRegionTitle.classList.add("card-region-title");
  cardRegionBody.appendChild(cardRegionTitle);
  // cardChoix
  const cardVille = document.createElement("div");
  cardVille.classList.add("card-ville");
  cardVille.textContent = "ville";
  cardRegion.appendChild(cardVille);

  const cardCampagne = document.createElement("div");
  cardCampagne.classList.add("card-campagne");
  cardCampagne.textContent = "campagne";
  cardRegion.appendChild(cardCampagne);

  const cardCoupdeCoeur = document.createElement("div");
  cardCoupdeCoeur.classList.add("card-coup-de-coeur");
  cardCoupdeCoeur.textContent = "ville";
  cardRegion.appendChild(cardCoupdeCoeur);
});

// createCardRegion(regionArray[i]);

// if click on region 1 display region card with content from index of region 1
// if region 2  display content array index 2, etc

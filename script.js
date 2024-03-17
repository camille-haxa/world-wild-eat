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

    const regionButton = document.createElement("img");
    regionButton.classList.add("region-button");
    regionButton.src = region.img;
    regionComponent.appendChild(regionButton);

    const regionTitle = document.createElement("h3");
    regionTitle.classList.add("region-title");
    regionTitle.textContent = region.name;
    regionComponent.appendChild(regionTitle);
  });
}

createRegion(regionArray);
//selection element sur lequel venir attacher onclick event:
const regionButton = document.queryselector(".region-button");
regionButton.onclick = function (createCardRegion) {

//creation  card Region + add class:
const cardRegion = document.createElement("div");
cardRegion.classList.add("region-card");
//appendChild?

//creation card Region Header + add class + appendChild
const cardRegionHeader = document.createElement("div");
cardRegionHeader.classList.add("region-card-header");
cardRegion.appendChild(cardRegionHeader);


const cardRegionImg = document.createElement("div");
//cardregionImg.style.backgroundImage = //source de l'image dans l'array
cardRegionImg.classList.add("region-card-img");
cardRegionHeader.appendChild(cardRegionImg);

}
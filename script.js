/* Interactivité du menu burger YD */
const burgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".curtainNavigation");

function toggleNav() {
  burgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
burgerButton.addEventListener("click", toggleNav);

/* Création et agrégation des régions sur la landing page par ajout d'un objet dans le tableau si nécessaire YD */
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
  let i = 1;
  regions.forEach((region) => {
    const regionComponent = document.createElement("div");
    regionComponent.classList.add(`region-component-${i}`);
    regionPresentation.appendChild(regionComponent);

    const regionComponentImage = document.createElement("img");
    regionComponentImage.classList.add(`region-button-${i}`);
    regionComponentImage.id = region.name;
    regionComponentImage.src = region.img;
    regionComponent.appendChild(regionComponentImage);

    const regionComponentTitle = document.createElement("h3");
    regionComponentTitle.classList.add("region-title");
    regionComponentTitle.textContent = region.name;
    regionComponent.appendChild(regionComponentTitle);

    i += 1;
  });
}

createRegion(regionArray);
/* Fin de la fonction d'ajout de région sur la landing page YD */

/*  debut événement cardRegion  CD */

// selection element pour on click
const baseline = document.querySelector(".baseline");
/* event listener + creation card Region */
let cardRegion;

function createCardRegion(restaurants, regionId) {
  // if (cardRegion) {
  //   return;
  // }
  /* reation element card */
  cardRegion = document.createElement("dialog");
  cardRegion.classList.add("region-card");
  baseline.appendChild(cardRegion);
  /* X button pr fermeture */
  const closeRegionButton = document.createElement("button");
  closeRegionButton.classList.add("region-close-button");
  closeRegionButton.textContent = "X";
  cardRegion.appendChild(closeRegionButton);

  // closeButton.addEventListener("click", () => {
  //   dialog.close();
  // });

  /* suite creation elements de la card Region */
  const cardRegionHeader = document.createElement("div");
  cardRegionHeader.classList.add("region-card-header");
  cardRegion.appendChild(cardRegionHeader);

  const cardRegionImg = document.createElement("img");
  cardRegionImg.classList.add("region-card-image");
  cardRegionHeader.appendChild(cardRegionImg);

  const currentRegion = regionArray.find((e) => e.name === regionId);

  cardRegionImg.src = currentRegion.img;

  const cardRegionBody = document.createElement("div");
  cardRegionBody.classList.add("region-card-body");
  cardRegion.appendChild(cardRegionBody);

  const cardRegionTitle = document.createElement("h3");
  cardRegionTitle.classList.add("card-region-title");
  // cardRegionTitle.textContent = regionArray.name[i];
  cardRegionHeader.appendChild(cardRegionTitle);

  /* creation boutons ville, campagne, coup de coeur */
  const cardVille = document.createElement("button");
  cardVille.classList.add("card-ville", "card-restaurant");
  cardVille.textContent = "Ville";
  cardRegion.appendChild(cardVille);

  const villeElement = restaurants.find((e) => e.type === "Ville");

  const randomImage1 = document.createElement("img");
  randomImage1.classList.add("region-button-1");
  randomImage1.src = villeElement.img;
  cardVille.appendChild(randomImage1);

  const cardCampagne = document.createElement("button");
  cardCampagne.classList.add("card-campagne", "card-restaurant");
  cardCampagne.textContent = "Campagne";
  cardRegion.appendChild(cardCampagne);

  const campagneElement = restaurants.find((e) => e.type === "Campagne");

  const randomImage2 = document.createElement("img");
  randomImage2.classList.add("region-button-1");
  randomImage2.src = campagneElement.img;
  cardCampagne.appendChild(randomImage2);

  const cardCoupdeCoeur = document.createElement("button");
  cardCoupdeCoeur.classList.add("card-coup-de-coeur", "card-restaurant");
  cardCoupdeCoeur.textContent = "Coup de coeur";
  cardRegion.appendChild(cardCoupdeCoeur);

  const heartElement = restaurants.find((e) => e.type === "Coup de Coeur");

  const randomImage3 = document.createElement("img");
  randomImage3.classList.add("region-button-1");
  randomImage3.src = heartElement.img;
  cardCoupdeCoeur.appendChild(randomImage3);

  /*  const closeCardRegion = document.querySelector(".region-card"); */
  const closeBtn1 = document.querySelector(".region-close-button");

  closeBtn1.addEventListener("click", () => {
    cardRegion.remove();
  });
}

// const allButton = document.querySelectorAll(".region-component");

const restaurantArray = [
  {
    img: "./ressources/images/city.jpg",
    type: "Ville",
    name: "Le carbet d'Oc",
    adresse: "8 rue des filatiers 31 100 Toulouse",
    description:
      "Situé dans une rue typiquement Toulousaine, vous retrouverez leur carte bistrotière et à Tapas aux accents du Sud-Ouest et aux Saveurs du Monde. Restaurant de style décontracté, avec terrasse et boiseries, spécialisé dans les tapas, les mojitos et les bières artisanales",
    site: "https://www.facebook.com/LeCarbetDOc",
    accessibilité: "Parking à proximité, Terrasse,",
  },
  {
    img: "./ressources/images/campagne.jpg",
    type: "Campagne",
    name: " La terrasse du TNG",
    adresse: "Allée du lac, 32600 l'Isle Jourdain",
    description:
      "Envie de vous retrouver entre amis ou en famille sur une terrasse ombragée au bord d'une lac ? La brasserie La Terrasse vous accueille avec une sélection de produits frais dans une ambiance décontractée et conviviale.",
    site: "https://la-terrasse-tng.fr/",
    accessibilité: "Parking à proximité, Terrasse",
  },
  {
    img: "./ressources/images/coupdecoeur.jpg",
    type: "Coup de Coeur",
    name: "Chez Loulou",
    adresse: "Col des Palomières, 65200 Gerde",
    description:
      "Attention, établissement mythique s'il en est ! L'ambiance compte ici autant que les plats. Il faut vivre ces repas où seuls les saisons et les produits forment la carte. Elle n'est pas très chargée, du bon, du très bon et du local : confits, faux-filet, garbure, charcuteries, poulet à l'écrevisse, fromage du pays, tarte normande aux fruits rouges, vin... C'est copieux, c'est bon, le cadre est champêtre, l'accueil est décontracté et les prix sont doux, que demander de plus !",
    site: "pas de site internet",
    accessibilité:
      "Route de montagne, Restaurant sur la gauche en arrivant en haut du Col.",
  },
];

const regionButtons = [
  ".region-button-1",
  ".region-button-2",
  ".region-button-3",
];

regionButtons.forEach((elem) => {
  /* createCardRegion(regionArray); */
  const currentElement = document.querySelector(elem);
  currentElement.addEventListener("click", () =>
    createCardRegion(restaurantArray, currentElement.id)
  );
});
// if click on region 1 display region card with content from index of region 1
// if region 2  display content array index 2, etc

/* Tableau des cartes des restaurants différents A.B (Code Antoine ) */

/* Programmation du changement de carte de restaurant (sélection) A.B */
/* tableau : changer les valeurs de chacun ?? */
/* const regionButton = document.querySelector(".region-button");
const regionComponent = document.querySelector(".region-component");
// declaration event

regionButton.addEventListener("click", createCardRegion);
let cardRegion;

function createCardRegion() {
  if (cardRegion) {
    return;
  }
  // declaration function

  cardRegion = document.createElement("dialog");
  cardRegion.classList.add("region-card");
  regionComponent.appendChild(cardRegion); */
/* image de ma card restaurant */

/* contenu de ma card restaurant descriptif */
/* const restaurantCardButton = document.querySelector(".card-restaurant");
restaurantCardButton.addEventListener("click", () => {
  const cardRestaurantDescription = document.createElement("dialog");
  cardRestaurantDescription.classList.add("card-restaurant-description");
  cardRegion.appendChild(cardRestaurantDescription);

  const buttonCloseRestaurant = document.createElement("button");
  buttonCloseRestaurant.classList.add("close-restaurant");
  buttonCloseRestaurant.textContent = "X";
  cardRestaurantDescription.appendChild(buttonCloseRestaurant);

  const imgCardContainerRestaurant = document.createElement("div");
  imgCardContainerRestaurant.classList.add("img-container-card-restaurant");
  cardRestaurantDescription.appendChild(imgCardContainerRestaurant);

  const imageCardrestaurant = document.createElement("img");
  imageCardrestaurant.classList.add("img-card-restaurant");
  imageCardrestaurant.src = restaurantArray.img;
  imgCardContainerRestaurant.appendChild(imageCardrestaurant);

/*  title sont parent de la div du contour */
/*
const titleCityRestaurant = document.createElement("h2");
titleCityRestaurant.classList.add("title-city-restaurant");
titleCityRestaurant.textContent = restaurantArray.type;
cardRestaurantDescription.appendChild(titleCityRestaurant);
*/
/* nom du restaurant  */
/*
const nameRestaurant = document.createElement("h3");
nameRestaurant.classList.add("name-restaurant");
nameRestaurant.textContent = restaurantArray.name;
cardRestaurantDescription.appendChild(nameRestaurant);
*/
/* adresse */
/*
const adresseRestaurant = document.createElement("h4");
adresseRestaurant.classList.add("adresse-restaurant");
adresseRestaurant.textContent = restaurantArray.adresse;
cardRestaurantDescription.appendChild(adresseRestaurant);
*/
/* description */
/*
const descriptionRestaurant = document.createElement("p");
descriptionRestaurant.classList.add("description-restaurant");
descriptionRestaurant.textContent = restaurantArray.description;
cardRestaurantDescription.appendChild(descriptionRestaurant);
*/
/* site internet */
/*
const siteRestaurant = document.createElement("p");
siteRestaurant.classList.add("site-restaurant");
siteRestaurant.textContent = restaurantArray.site;
cardRestaurantDescription.appendChild(siteRestaurant);
*/
/* accessibilité */
/*
const accessibiliteRestaurant = document.createElement("p");
accessibiliteRestaurant.classList.add("accessibilite-restaurant");
accessibiliteRestaurant.testContent = restaurantArray.accessibilité;
cardRestaurantDescription.appendChild(accessibiliteRestaurant);
*/
/* cardDescriptionRestaurant.addEventListener("click");
createCardRestaurant(restaurantArray); */

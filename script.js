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

/* Tableau des cartes des restaurants différents A.B */

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

/* Programmation du changement de carte de restaurant (sélection) A.B */
/* tableau : changer les valeurs de chacun ?? */
const cardDescriptionRestaurant = document.querySelector(
  ".card-restaurant-button"
);

function createCardRestaurant(selectKeys) {
  selectKeys.forEach((selectKey) => {
    /* image de ma card restaurant */

    const imgCardContainerRestaurant = document.createElement("div");
    imgCardContainerRestaurant.classList.add("img-container-card-restaurant");
    cardRegion.appendChild(imgCardContainerRestaurant);

    const imageCardrestaurant = document.createElement("img");
    imageCardrestaurant.classList.add("img-card-restaurant");
    imageCardrestaurant.src = selectKey.img;
    imgCardContainerRestaurant.appendChild(imageCardrestaurant);

    /* contenu de ma card restaurant descriptif */

    const cardRestaurantDescription = document.createElement("div");
    cardRestaurantDescription.classList.add("card-restaurant-description");
    cardRegion.appendChild(cardRestaurantDescription);

    /* title sont parent de la div du contour */

    const titleCityRestaurant = document.createElement("h2");
    titleCityRestaurant.classList.add("title-city-restaurant");
    titleCityRestaurant.textContent = selectKey.type;
    cardRestaurantDescription.appendChild(titleCityRestaurant);

    /* nom du restaurant  */

    const nameRestaurant = document.createElement("h3");
    nameRestaurant.classList.add("name-restaurant");
    nameRestaurant.textContent = selectKey.name;
    cardRestaurantDescription.appendChild(nameRestaurant);

    /* adresse */

    const adresseRestaurant = document.createElement("h4");
    adresseRestaurant.classList.add("adresse-restaurant");
    adresseRestaurant.textContent = selectKey.adresse;
    cardRestaurantDescription.appendChild(adresseRestaurant);

    /* description */

    const descriptionRestaurant = document.createElement("p");
    descriptionRestaurant.classList.add("description-restaurant");
    descriptionRestaurant.textContent = selectKey.description;
    cardRestaurantDescription.appendChild(descriptionRestaurant);

    /* site internet */

    const siteRestaurant = document.createElement("p");
    siteRestaurant.classList.add("site-restaurant");
    siteRestaurant.textContent = selectKey.site;
    cardRestaurantDescription.appendChild(siteRestaurant);

    /* accessibilité */

    const accessibiliteRestaurant = document.createElement("p");
    accessibiliteRestaurant.classList.add("accessibilite-restaurant");
    accessibiliteRestaurant.testContent = selectKey.accessibilité;
    cardRestaurantDescription.appendChild(accessibiliteRestaurant);

    /* bouton parent de card région */

    const buttonCardRestaurant = document.createElement("div");
    buttonCardRestaurant.classList.add("button-card-restaurant");
    cardRegion.appendChild(buttonCardRestaurant);

    const buttonCardRestaurantStyle = document.createElement("button");
    buttonCardRestaurantStyle.classList.add("second-button-card-restaurant");
    buttonCardRestaurant.appendChild(buttonCardRestaurant);
  });
}
cardDescriptionRestaurant.addEventListener("click");
createCardRestaurant(restaurantArray);

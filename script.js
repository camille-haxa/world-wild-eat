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
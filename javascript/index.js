function updateTime() {

let sanFranciscoElement=document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
let sanFranciscoDatElement= sanFranciscoElement.querySelector(".date");
let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
let sanFranciscoTime = moment().tz("America/Los_Angeles");

sanFranciscoDatElement.innerHTML= sanFranciscoTime.format("MMMM Do YYYY");
sanFranciscoTimeElement.innerHTML= sanFranciscoTime.format("h:mm:ss [<small>]A[</small>]");

  }

let tokyoElement=document.querySelector("#tokyo");
  if (tokyoElement) {
let tokyoDatElement= tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");



tokyoDatElement.innerHTML= tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML= tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  }

let portLouisElement=document.querySelector("#port-louis");
if(portLouisElement){
let portLouisDatElement= portLouisElement.querySelector(".date");
let portLouisTimeElement = portLouisElement.querySelector(".time");
let portLouisTime = moment().tz("Indian/Mauritius");



portLouisDatElement.innerHTML= portLouisTime.format("MMMM Do YYYY");
portLouisTimeElement.innerHTML= portLouisTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event){
let cityTimeZone = event.target.value;
console.log(event);
let cityName = cityTimeZone.replace("_"," ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement =document.querySelector("#cities");
citiesElement.innerHTML= `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
`;

}

updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


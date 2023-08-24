function updateTime() {

let sanFranciscoElement=document.querySelector("#san-francisco");
let sanFranciscoDatElement= sanFranciscoElement.querySelector(".date");
let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
let sanFranciscoTime = moment().tz("America/Los_Angeles");



sanFranciscoDatElement.innerHTML= sanFranciscoTime.format("MMMM Do YYYY");
sanFranciscoTimeElement.innerHTML= sanFranciscoTime.format("h:mm:ss [<small>]A[</small>]")


let tokyoElement=document.querySelector("#tokyo");
let tokyoDatElement= tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");



tokyoDatElement.innerHTML= tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML= tokyoTime.format("h:mm:ss [<small>]A[</small>]")



let portLouisElement=document.querySelector("#port-louis");
let portLouisDatElement= portLouisElement.querySelector(".date");
let portLouisTimeElement = portLouisElement.querySelector(".time");
let portLouisTime = moment().tz("Indian/Mauritius");



portLouisDatElement.innerHTML= portLouisTime.format("MMMM Do YYYY");
portLouisTimeElement.innerHTML= portLouisTime.format("h:mm:ss [<small>]A[</small>]")



}
updateTime();
setInterval(updateTime,1000);






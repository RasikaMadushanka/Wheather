AOS.init();
async function callApi(){
     fetch("http://api.weatherapi.com/v1/current.json?key=571592267d4c452988370255251308&q=Udawalawa&aqi=no").then(response =>response.json()).then(data => setDetails(data));

    // let response= await fetch("http://api.weatherapi.com/v1/current.json?key=571592267d4c452988370255251308&q=padaviya&aqi=no");
    // let data =response.json();
    // console.log(data);



}
function setDetails(data){
    let cityNAme=document.getElementById("city");
    let mainStatusImage=document.getElementById("weatherIcon");
    let countryName=document.getElementById("locationName");

    cityNAme.innerText=data.location.name;
    mainStatusImage.src=data.current.condition.icon;
    countryName.innerText=data.location.country;

}
callApi();
// ------------------date set------------------------
let date=new Date();
formatDate={
    "Weekday":`long`,
    "month":`long`,
    "year":`numeric`,
    "day":`numeric`

}
let currentDate=date.toLocaleDateString("en-US",formatDate);
document.getElementById("date").innerText=currentDate;

let searchCity=document.getElementById("txtsearch");
searchCity.addEventListener("keypress",e =>{

    if(e.key==="Enter"){
        console.log(searchCity.value)
    }
})
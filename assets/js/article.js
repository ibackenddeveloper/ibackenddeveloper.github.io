var target = document.getElementById("MyContent");
var host = "http://localhost:8090";
var endPoint = window.location.search.substr(1);
console.log(endPoint);
fetch(host + endPoint).then(function (response) {
  return response.json();
}).then(function (obj) {
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    console.log(element["articleContent"]);
    target.innerHTML = target.innerHTML + "<p>" + element["articleContent"] + "</p>";
  }					
  
}).catch( function (error) {
  console.log(error);
});
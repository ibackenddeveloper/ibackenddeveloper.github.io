var target = document.getElementById("one");
var host = "http://localhost:8090";
var endPoint = "/category/";
var url = host+endPoint;
console.log(url);
var toEndPoint = "/concept/"
fetch(host + endPoint).then(function (response) {
  console.log(response);
  return response.json();
}).then(function (obj) {
  console.log(obj);
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    var row = `<article> 
            <span class="image"> <img src="images/pic0`+index+`.jpg" alt="" /> </span> 
            <header class="major"> 
              <h3><a href="concepts.html?`+element["categoryName"] + "&" +endPoint+"1"+toEndPoint+`" class="link">`+element["categoryName"]+`</a></h3> 
              <p>`+element["shortDescription"]+`</p> 
            </header>
          </article>`;
    target.innerHTML = target.innerHTML + row;
  }					
  
}).catch( function (error) {
  console.log(error);
});
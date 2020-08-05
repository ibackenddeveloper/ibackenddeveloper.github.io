var target = document.getElementById("two");
var host = "http://localhost:8090";
params = location.search.substr(1).split("&");
var endPoint = params[1];
console.log(endPoint);
window.document.title = decodeURI("I Backend Dev - " + params[0]);
var toEndPoint = "/topic/"
fetch(host + endPoint).then(function (response) {
  return response.json();
}).then(function (obj) {
  console.log(obj);
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    var row = `<section>
                    <a href="topics.html?`+endPoint+"1"+toEndPoint+`" " class="image">
                        <img src="images/pic08.jpg" alt="" data-position="center center" />
                    </a>
                    <div class="content">
                        <div class="inner">
                            <header class="major">
                                <h3>`+element["conceptName"]+`</h3>
                            </header>
                            <p>`+element["conceptShortDescription"]+`</p>
                            <ul class="actions">
                                <li><a href="topics.html?`+endPoint+"1"+toEndPoint+`" class="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>`;
    target.innerHTML = target.innerHTML + row;
  }					
  
}).catch( function (error) {
  console.log(error);
});
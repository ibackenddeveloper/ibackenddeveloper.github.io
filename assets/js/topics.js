var target = document.getElementById("cd-timeline");
var host = "http://localhost:8090";
var endPoint = window.location.search.substr(1);
console.log(endPoint);
var toEndPoint = "/article/"
fetch(host + endPoint).then(function (response) {
  return response.json();
}).then(function (obj) {
  console.log(obj);
  window.document.title = "Topic Name"
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    var row = `<div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <a href="article.html?`+endPoint+"1"+toEndPoint+`">
                        <div class="cd-timeline-content">
                            <h2>`+element["topicName"]+`</h2>
                            <div class="timeline-content-info">
                                <span class="timeline-content-info-date">
                                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                    30 June 2016
                                </span>
                            </div>
                        </div> <!-- cd-timeline-content -->
                    </a>
                </div> <!-- cd-timeline-block -->`;
    target.innerHTML = target.innerHTML + row;
  }					
  
}).catch( function (error) {
  console.log(error);
});
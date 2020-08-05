var target = document.getElementById("cd-timeline");
fetch('topics-mock.json', {
  mode : "no-cors"
}).then(function (response) {
  return response.json();
}).then(function (obj) {
  console.log(obj);
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    var row = `<div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <a href="article.html">
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
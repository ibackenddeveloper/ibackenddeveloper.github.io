const host = "http://localhost:8090";
//const host = "https://blog-service.herokuapp.com/";
function callCategories() {
    var target = document.getElementById("one");
    
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
                <h3><a href="concepts.html?`+element["categoryName"] + "&" +endPoint+element["id"]+toEndPoint+`" class="link">`+element["categoryName"]+`</a></h3> 
                <p>`+element["shortDescription"]+`</p> 
                </header>
            </article>`;
        target.innerHTML = target.innerHTML + row;
    }					
    
    }).catch( function (error) {
    console.log(error);
    });
}

function callConcepts() {
    var target = document.getElementById("two");
    params = location.search.substr(1).split("&");
    var endPoint = params[1];
    console.log(endPoint);
    
    
    window.document.title = decodeURI("I Backend Dev - " + params[0]);
    document.getElementById("page-title").innerHTML = decodeURI(params[0]);

    var toEndPoint = "/topic/"
    fetch(host + endPoint).then(function (response) {
    return response.json();
    }).then(function (obj) {
    console.log(obj);
    
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        var row = `<section>
                        <a href="topics.html?`+endPoint+element["id"]+toEndPoint+`" " class="image">
                            <img src="images/pic08.jpg" alt="" data-position="center center" />
                        </a>
                        <div class="content">
                            <div class="inner">
                                <header class="major">
                                    <h3>`+element["conceptName"]+`</h3>
                                </header>
                                <p>`+element["conceptShortDescription"]+`</p>
                                <ul class="actions">
                                    <li><a href="topics.html?`+element["conceptName"] + "&" +endPoint+element["id"]+toEndPoint+`" class="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>`;
        target.innerHTML = target.innerHTML + row;
    }					
    
    }).catch( function (error) {
    console.log(error);
    });
}

function callTopics() {
    var target = document.getElementById("cd-timeline");
    params = location.search.substr(1).split("&");
    var endPoint = params[1];
    console.log(endPoint);
    
    
    window.document.title = decodeURI("I Backend Dev - " + params[0]);
    document.getElementById("page-title").innerHTML = decodeURI(params[0]);
    console.log(endPoint);
    var toEndPoint = "/article/"
    fetch(host + endPoint).then(function (response) {
    return response.json();
    }).then(function (obj) {
    console.log(obj);
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        var row = `<div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-picture">
                        </div>

                        <a href="article.html?`+element["topicName"] + "&" +endPoint+element["id"]+toEndPoint+`">
                            <div class="cd-timeline-content">
                                <h2>`+element["topicName"]+`</h2>
                                <div class="timeline-content-info">
                                    <span class="timeline-content-info-date">
                                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                        `+element["createdDate"].split("T")[0]+`
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
}

function callArticles() {
    var target = document.getElementById("MyContent");
    params = location.search.substr(1).split("&");
    var endPoint = params[1];
    console.log(endPoint);
    
    
    window.document.title = decodeURI("I Backend Dev - " + params[0]);
    document.getElementById("page-title").innerHTML = decodeURI(params[0]);
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
}
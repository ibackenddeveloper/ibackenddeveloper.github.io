var target = document.getElementById("two");
fetch('concepts-mock.json', {
  mode : "no-cors"
}).then(function (response) {
  return response.json();
}).then(function (obj) {
  console.log(obj);
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    var row = `<section>
                    <a href="topics.html" class="image">
                        <img src="images/pic08.jpg" alt="" data-position="center center" />
                    </a>
                    <div class="content">
                        <div class="inner">
                            <header class="major">
                                <h3>`+element["conceptName"]+`</h3>
                            </header>
                            <p>`+element["conceptShortDescription"]+`</p>
                            <ul class="actions">
                                <li><a href="topics.html" class="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>`;
    target.innerHTML = target.innerHTML + row;
  }					
  
}).catch( function (error) {
  console.log(error);
});
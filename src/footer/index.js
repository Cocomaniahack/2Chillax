
 var el = document.createElement("p");
//var el = document.getElementById("footer");

el.innerHTML = `<footer class="page-footer teal">
                    <div class="container">
                      <div class="row">
                        <div class="col l6 s12">
                          <h5 class="white-text">Company free tours</h5>
                          <p class="grey-text text-lighten-4">We are a team of college students working </p>


                        </div>
                        <div class="col l3 s12">
                          <h5 class="white-text">Settings</h5>
                          <ul>
                            <li><a class="white-text" href="#!">Link 1</a></li>
            
                          </ul>
                        </div>
                        <div class="col l3 s12">
                          <h5 class="white-text">Connect</h5>
                          <ul>
                            <li><a class="white-text" href="#!">Link 1</a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="footer-copyright">
                      <div class="container">
                           Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                      </div>
                    </div>
                </footer>`
 //document.body.innerHTML = el    
document.body.appendChild(el);


import React from "react";
function Nav(){
    return(
    <React.Fragment>
    <div class="continer-fluid ">
    <div class=" collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
      <div class=" bg-dark p-4 text-white ">
        <div class="row container mx-auto justify-content-between">
          <div class="col-md-12 col-lg-7 ">
            <h5>About</h5>
            <p class="text-secondary">Add some information about the album below, the author, or any other background
              context. Make it a few
              sentences long so folks can pick up some informative tidbits. Then, link them off to some social
              networking sites or contact information.</p>
          </div>
          <div class="col-md-12 col-lg-4">
            <h5>Contact</h5>
            <ul class="list-unstyled text-white">
              <li><a href="#" class="text-decoration-none text-white">Follow on Twitter</a> </li>
              <li><a href="#" class="text-decoration-none text-white">Like on Facebook</a></li>
              <li><a href="#" class="text-decoration-none text-white">Email me</a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark rtl"> 
      <div class="container">
        <div>
          <i class="fa-solid fa-camera text-white fs-5">&nbsp;&nbsp;</i><span
            class="text-white fw-bold fs-5">Album</span>
        </div>
        <div>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</React.Fragment>
    );
}

export default Nav;
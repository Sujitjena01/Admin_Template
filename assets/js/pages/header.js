class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-10">
            <div class="left">
              <!--<a href="index-dark.html"><img src="assets/images/tpcodl-logo.png" alt="Tata Power Odisha logo"></a>-->
              <div class="three" id="nav-menu">
                <div class="hamburger" id="hamburger-11">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
              <div class="text">
                <div class="d_it-logo">
                  <img src="assets/images/D&it.png" alt="D&IT">
                </div>
                <div class="app_name">
                  <h5><span>ADMIN TEMPLATE</span></h5>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-5 col-2">
          <div class="three-dots">
            <i class="fa fa-ellipsis-vertical" aria-hidden="true"></i>
          </div>
            <div class="right" id="right"> 
              <ul>
                <!--<li>
                  <a href="#"><i class="fa fa-bell" aria-hidden="true"></i>
                    <span>10</span>
                  </a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>07</span>
                  </a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
                </li>-->
                <li>
                  <a href="#">
                    <i class="fa-regular fa-user"></i>
                    Hello! Sujit Kumar Jena
                  </a>
                </li> 
                <li>
                  <a href="#" class="btn btn-outline-primary">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                </li>
                <li>
              
                  <div class="toggle-box">
                      <input type="checkbox" name="checkbox1" id="toggle-box-checkbox" />
                      <label for="toggle-box-checkbox" class="toggle-box-label-left"></label>
                      <label for="toggle-box-checkbox" class="toggle-box-label"></label>
                  </div>
                </li>
              </ul>
              <!-- <h5>
                BAIDCMS
                <a href="#"><img src="assets/images/more.png" alt="More"></a>
              </h5> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    
          `
    }
  }
  
  
  
  customElements.define('main-header', Header);
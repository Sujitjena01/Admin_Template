
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>&copy; 2022 - Powered by TP Odisha IT Shared Service || All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
          `
    }
  }
  
  
  
  customElements.define('main-footer', Footer);
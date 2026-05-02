class Title extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <title>TATA Power :: Policy Corner Jayhanuman</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="assets/images/tata-fav-icon.png"  type="image/icon type">
        `
    }
}
  
customElements.define('main-title', Title);
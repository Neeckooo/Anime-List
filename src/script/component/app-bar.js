/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <nav class= navbar>Neckooleri Website </br>Anime List</nav>
      `
  }
}

customElements.define('app-bar', AppBar)

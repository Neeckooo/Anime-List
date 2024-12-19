/* eslint-disable no-undef */
class animeSearch extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  get input () {
    return this.querySelector('#searchElement')
  }

  get value () {
    return this.querySelector('#searchElement').value
  }

  render () {
    this.innerHTML = `      
      <div id="search-container" class="search-container sticky-top">
          <input placeholder="Cari Anime..." id="searchElement" type="search">
        </div>
      `
  }
}

customElements.define('search-bar', animeSearch)

/* eslint-disable accessor-pairs */
/* eslint-disable no-undef */
import './anime-item.js'
import dataSource from '../data/data-source.js'

class animeList extends HTMLElement {
  set animes (animes) {
    this._animes = animes
    this.render()
  }

  connectedCallback () {
    dataSource.anime()
      .then(data => {
        this.animes = data
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    this.innerHTML = ''
    this._animes.forEach(anime => {
      const animeItemElement = document.createElement('anime-item')
      animeItemElement.anime = anime
      this.appendChild(animeItemElement)
    })
  }

  renderError (message) {
    this.innerHTML += `<h3 class="placeholder">${message}</h3>`
  }
}

customElements.define('anime-list', animeList)

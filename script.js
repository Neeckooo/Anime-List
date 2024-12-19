class AnimeSearch extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        /* Styling untuk custom element */
        :host {
          display: block;
        }
        form {
          margin-bottom: 10px;
        }
        input[type="text"] {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        button[type="submit"] {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button[type="submit"]:hover {
          background-color: #45a049;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        li:hover {
          background-color: #f2f2f2;
        }
      </style>
      <form id="search-form">
        <input type="text" id="search-input" placeholder="Search Anime...">
        <button type="submit">Search</button>
      </form>
      <ul id="anime-list"></ul>
    `
  }

  connectedCallback () {
    // Ketika custom element ditambahkan ke DOM, tambahkan listener ke form
    const form = this.shadowRoot.querySelector('#search-form')
    form.addEventListener('submit', this._handleSubmit.bind(this))
  }

  _handleSubmit (e) {
    e.preventDefault()
    const input = this.shadowRoot.querySelector('#search-input')
    const keyword = input.value
    this._fetchAnime(keyword)
  }

  async _fetchAnime (keyword) {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
    const data = await response.json()
    this._renderAnime(data.data)
  }

  _renderAnime (animeList) {
    const list = this.shadowRoot.querySelector('#anime-list')
    list.innerHTML = ''
    animeList.forEach(anime => {
      const li = document.createElement('li')
      li.innerHTML = `<h3>${anime.title}</h3> <img src="${anime.images.jpg.image_url}"> <p>${anime.synopsis}</p>`
      list.appendChild(li)
    })
  }
}

customElements.define('anime-search', AnimeSearch)

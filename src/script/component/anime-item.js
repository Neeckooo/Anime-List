/* eslint-disable accessor-pairs */
/* eslint-disable no-undef */
class animeItem extends HTMLElement {
  set anime (anime) {
    this._anime = anime
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="card-group">
      <div class="card mb-3 style="max-width: 570px;">
        <div class="row g-0">
          <div class="card-header">                  
            <h3>${this._anime.title}</h3>             
          </div>
          <div class="col-sm-3">
            <img src="${this._anime.images.jpg.image_url}" class="card-img-top">      
            <p>Score  : ${this._anime.score} </p>              
            <p>Ranked #${this._anime.rank} </p>  
            <p>Popularity #${this._anime.popularity} </p>  
            <p>Members #${this._anime.members}</p>        
          </div>                      
          <div class="col-md-9">    
            <div class="card-body">                
              <p class="card-text">Type : ${this._anime.type}</p>
              <p class="card-text">Studio : ${this._anime.studios[0].name}</p>
              <p class="card-text">Genre : ${this._anime.genres[0].name}</p>
              <p class="card-text">Source : ${this._anime.source}</p>
              <p class="card-text">Total Episodes : ${this._anime.episodes}</p>
              <p class="card-text">Duration : ${this._anime.duration}</p>
              <p class="card-text">Aired : ${this._anime.aired.string}</p>
              <p class="card-text">Rating : ${this._anime.rating}</p>
              <p class="card-text" style="text-align:justify"><strong class="text-body-secondary">Synopsis : </strong><br>${this._anime.synopsis}</p>                                                   
            </div>                                         
          </div>                                               
        </div>                         
      </div>                        
    </div>
    `
  }
}

customElements.define('anime-item', animeItem)

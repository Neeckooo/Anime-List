import '../component/search-bar.js'
import '../component/anime-list.js'

const main = () => {
  const animeSearch = document.querySelector('search-bar')
  const animeList = document.querySelector('anime-list')
  const animeItem = animeList.getElementsByTagName('anime-item')

  const onKeyUp = () => {
    const filterSearch = animeSearch.value.toUpperCase()
    for (let i = 0; i < animeItem.length; i++) {
      const h3 = animeItem[i].getElementsByTagName('h3')[0]
      const h3Value = h3.textContent
      if (h3Value.toUpperCase().indexOf(filterSearch) > -1) {
        animeItem[i].style.display = ''
      } else {
        animeItem[i].style.display = 'none'
      }
    }
  }
  animeSearch.input.addEventListener('keyup', onKeyUp)
}

export default main

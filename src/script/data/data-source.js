/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-promise-reject-errors */
class dataSource {
  static anime () {
    return fetch('https://api.jikan.moe/v4/anime')
      .then(response => { return response.json() })
      .then(responseJson => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data)
        } else {
          return Promise.reject('Anime tidak ditemukan')
        }
      })
  }
}

export default dataSource

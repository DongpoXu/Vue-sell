import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://192.168.1.117/sell/'
}
const basUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get (url) {
  return function (params) {
    return axios
      .get(basUrl + url, {
        params
      })
      .then(res => {
        const { errno, data } = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(() => {})
  }
}

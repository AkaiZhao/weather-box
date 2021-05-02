import qs from 'qs';
const BASE_URL = 'https://opendata.cwb.gov.tw/api'

const fetcher = (url = '') => {
  const _url = `${BASE_URL}${url}`
  return fetch(_url)
}

export const fetchTaiwanWeather = (config = {}) => {
  config.Authorization = import.meta.env.VITE_WEAHTER_TOKEN
  const query = qs.stringify(config, { addQueryPrefix: true })
  const api = `/v1/rest/datastore/F-D0047-091${query}`
  return fetcher(api)
}
export default fetcher

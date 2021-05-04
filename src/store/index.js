import { createStore } from 'vuex'
import { getTaiwanWeather } from '../services/fetch'

const desc = {
  PoP12h: '12小時降雨機率',
  T: '平均溫度',
  RH: '平均相對濕度',
  MinCI: '最小舒適度指數',
  WS: '最大風速',
  MaxAT: '最高體感溫度',
  Wx: '天氣現象',
  MaxCI: '最大舒適度指數',
  MinT: '最低溫度',
  UVI: '紫外線指數',
  WeatherDescription: '天氣預報綜合描述',
  MinAT: '最低體感溫度',
  MaxT: '最高溫度',
  WD: '風向',
  Td: '平均露點溫度'
}

const store = createStore({
  state: () => ({
    weathers: [],
    citys: []
  }),
  mutations: {
    setWeathers (state, weathers) {
      state.weathers = weathers
    },
    setCitys (state, citys) {
      state.citys = citys
    }
  },
  actions: {
    async  getWeather ({ commit }) {
      const { records } = await getTaiwanWeather()
      const citys = records.locations[0].location
        .map(item => ({
          city: item.locationName,
          weathers: item.weatherElement?.reduce((weathers, element) => {
            weathers[element.elementName] = element
            return weathers
          }, {})
        }))
      console.table(citys[0].weathers.T.time)
      console.table(citys[0].weathers.T.time[1].elementValue[0])
      commit('setCitys', citys)
    }
  }
})
export default store

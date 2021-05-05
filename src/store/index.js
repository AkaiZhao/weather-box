import { createStore } from 'vuex'
import { getTaiwanWeather } from '../services/fetch'

const desc = {
  PoP12h: '12小時降雨機率',
  T: '平均溫度',
  // RH: '平均相對濕度',
  // MinCI: '最小舒適度指數',
  // WS: '最大風速',
  // MaxAT: '最高體感溫度',
  Wx: '天氣現象',
  // MaxCI: '最大舒適度指數',
  MinT: '最低溫度',
  UVI: '紫外線指數',
  WeatherDescription: '天氣預報綜合描述',
  // MinAT: '最低體感溫度',
  MaxT: '最高溫度'
  // WD: '風向',
  // Td: '平均露點溫度'
}

const store = createStore({
  state: () => ({
    weathers: [],
    citys: [],
    currentCity: ''
  }),
  mutations: {
    setWeathers(state, weathers) {
      state.weathers = weathers
    },
    setCitys(state, citys) {
      state.citys = citys
    }
  },
  actions: {
    async getWeather({ commit }) {
      const { records } = await getTaiwanWeather()
      const citys = records.locations[0].location
        .map(item => {
          return {
            city: item.locationName,
            weeks: item.weatherElement
              ?.find(element => element.elementName === 'Wx')
              ?.time
              ?.filter((_, index) => !(index % 2))
              ?.slice(0, 7)
              ?.map(({ elementValue }) => elementValue[0].value),
            ...item.weatherElement?.reduce((weather, element) => {
              if (Object.keys(desc).includes(element.elementName)) {
                weather[element.elementName] = {
                  value: element.time[0].elementValue[0].value,
                  description: element.description
                }
              }
              return weather
            }, {})
          }
        })
      console.table(citys)
      commit('setCitys', citys)
    }
  },
  getters: {
    cityList: state => state.citys.reduce((res, { city }) => [...res, city], [])
  }
})
export default store

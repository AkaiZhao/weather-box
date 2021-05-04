<template lang="pug">
.weather-box
  .weather-box-main
    .main-info
      .main-info-detials
        .main-info-detials-title City Name
        .main-info-detials-subtitle 2021/05/03 16:45
        component.main-info-detials-icon(:is="IconSunCloud")
        .main-info-detials-label cloudy
      .main-info-temp 27°
  .weather-box-footer
    .weather-box-footer-tabs 
      .weather-box-footer-tab weathers
    .weather-box-footer-row
      .weather-box-footer-daily(v-for="{ key, name, icon } in dailyArr")
        .daily-title {{ name }}
        component.icon(:is="icon")
</template>

<script setup>
import IconRain from '../Icons/Rain.vue'
import IconSun from '../Icons/Sun.vue'
import IconSunCloud from '../Icons/SunCloud.vue'
import WeatherBox from '../WeatherBox/index.vue'
import { shallowRef } from 'vue'

 
const dailyArr = shallowRef([
  {key: 'sun', name:'SUN', icon: IconSun},
  {key: 'mon', name:'MON', icon: IconSun},
  {key: 'tue', name:'TUE', icon: IconSun},
  {key: 'wed', name:'WED', icon: IconSun},
  {key: 'thu', name:'THU', icon: IconSun},
  {key: 'fri', name:'FRI', icon: IconSun},
  {key: 'sat', name:'SAT', icon: IconSun},
])


</script>

<style lang="scss">
.weather-box {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(#fff, 0.1);
  box-shadow: 0 0 20px -10px rgba(#fff, 0.2);

  &-main {
    padding: 24px 24px 0px 24px;
    .main-info {
      display: flex;
      justify-content: space-between;
      &-detials {
        &-title {
          letter-spacing: 1.3px;
          font-size: 28px;
          padding-bottom: 4px;
        }
        &-subtitle {
          font-size: 16px;
        }
        &-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 4px;
        }
        &-label {
          font-size: 24px;
        }
      }

      &-temp {
        line-height: 1;
        padding-bottom: 4px;
        font-size: 72px;
        font-weight: lighter;
        color: rgba(#fff, 0.9);
      }
    }
  }

  &-footer {
    padding: 6px 24px;
    &-row {
      border-top: 1px solid rgba(#fff, 0.8);
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      color: #000;
    }

    &-tab {
      padding: 8px 4px;
    }

    &-daily {
      flex: 1;
      text-align: center;
    }
  }
  .daily {
    &-title {
      font-size: 12px;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
<template lang="pug">
.weather-box
  .weather-box-main
    .info 
      .info-temp 27°C
      .info-city 彰化縣
      .info-detail 零星陣雨
  .weather-box-footer
    .weather-box-footer-daily(v-for="{ key, name, icon } in dailyArr")
      .daily-title {{ name }}
      component.icon(:is="icon")
</template>

<script setup>
import IconRain from '../Icons/Rain.vue';
import IconSun from '../Icons/Sun.vue';
import IconSunCloud from '../Icons/SunCloud.vue';
import WeatherBox from '../WeatherBox/index.vue';
import { ref } from "vue";


const dailyArr = ref([
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

  &-main {
    position: relative;
    width: 100%;
    height: 300px;
    background: linear-gradient(25deg, #19283d, #1d678f);
    .info {
      position: absolute;
      left: 30px;
      bottom: 20px;
      line-height: 1.5;
      font-size: 16px;
      color: rgba(#fff, 0.5);

      &-temp {
        line-height: 1;
        padding-bottom: 4px;
        font-size: 72px;
        color: rgba(#fff, 0.9);
      }
    }
  }
  &-footer {
    padding: 6px 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    color: #000;
    &-daily {
      flex: 1;
      text-align: center;
    }
  }
  .daily {
    &-title {
      text-align: center;
      padding-bottom: 5px;
      font-weight: bold;
    }
  }
}
</style>
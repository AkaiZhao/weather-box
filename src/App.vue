<template lang="pug">
.background
  weather-box
</template>

<script setup>
import store from './store/index';
import { getTaiwanWeather } from './services/fetch';
import IconRain from './components/Icons/Rain.vue';
import IconSun from './components/Icons/Sun.vue';
import IconSunCloud from './components/Icons/SunCloud.vue';
import WeatherBox from './components/WeatherBox/index.vue';

store.dispatch('getWeather')


</script>

<style lang="scss">
@import url("./assets/scss/keyframes.scss");

* {
  color: #fff;
}
.background {
  height: 100vh;
  background: linear-gradient(#7494c3, #ecc5be);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 40px;
  height: 40px;
}

.cloud {
  fill: #ccc;
  animation: cloud 3s infinite;
  animation-delay: -0.3s;
}

.sun {
  stroke: rgba(255, 214, 51, 0.6);
  fill: #ffd633;
  stroke-width: 20px;
  stroke-dasharray: 4px;
  animation: sun 6s infinite linear;
}
</style>

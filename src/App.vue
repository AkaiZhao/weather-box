<template lang="pug">
h1.title Weather Apps
weather-box
//- icon-rain
//- icon-sun
//- icon-sun-cloud
</template>

<script setup>
import IconRain from './components/Icons/Rain.vue';
import IconSun from './components/Icons/Sun.vue';
import IconSunCloud from './components/Icons/SunCloud.vue';
import WeatherBox from './components/WeatherBox/index.vue';

</script>

<style lang="scss">
@import url("./assets/scss/keyframes.scss");

body {
  background-color: #232323;
  color: #fff;
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

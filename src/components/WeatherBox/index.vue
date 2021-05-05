<template lang="pug">
//- pre {{ dailyWeather }}
.weather-box
  .weather-box-main
    .main-info
      .main-info-detials
        transition(name="slide")
          .main-info-detials-title(@click="handleOpenList") {{ currentCity?.city }}

        .main-info-detials-subtitle {{ time }}
        component.main-info-detials-icon(:is="IconSunCloud")
        .main-info-detials-label {{ currentCity?.Wx.value }}
      .main-info-temp {{ currentCity?.T.value }}°C
  .weather-box-footer
    .weather-box-footer-tabs
      .weather-box-footer-tab weathers
    .weather-box-footer-row
      .weather-box-footer-daily(
        v-for="{ key, name, icon, desc } in dailyWeather"
      )
        .daily-title {{ name }}
        component.icon(:is="icon")
</template>

<script setup>
import IconRain from '../Icons/Rain.vue'
import IconSun from '../Icons/Sun.vue'
import IconSunCloud from '../Icons/SunCloud.vue'
import WeatherBox from '../WeatherBox/index.vue'
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import moment from 'moment'
import { useStore } from 'vuex'

const daily = [
  { key: 'sun', name: 'SUN'},
  { key: 'mon', name: 'MON'},
  { key: 'tue', name: 'TUE'},
  { key: 'wed', name: 'WED'},
  { key: 'thu', name: 'THU'},
  { key: 'fri', name: 'FRI'},
  { key: 'sat', name: 'SAT'}
]

const icons = {
  '多雲時晴': IconSunCloud,
  '晴時多雲': IconSunCloud,
  '多雲時陰': IconSunCloud,
  '多雲': IconRain,
}

const store = useStore()

const current = ref(20)
const time = ref(moment().format('YYYY/MM/DD HH:mm'))
const citys = computed(() => store.state.citys)
const currentCity = computed(() => citys?.value?.[current.value])
console.log(currentCity);
const dailyWeather = computed(()=>daily.map((item,i)=>({
  ...item,
  desc: currentCity?.value?.weeks[i],
  icon: icons[currentCity?.value?.weeks[i]] || IconSun
})))
watch(dailyWeather,(b)=>console.log(b))
</script>

<style lang="scss">
.weather-box {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(#fff, 0.1);
  position: relative;
  box-shadow: 0 0 20px -10px rgba(#fff, 0.2);
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url("src/assets/weather-bg.jpg");
    background-size: cover;
    filter: brightness(0.75) grayscale(1) blur(5px);
    opacity: 0.15;
  }

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
          position: relative;
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>

<template lang="pug">
svg
  circle(cx=0, cy=70, r=3) 
  circle(cx=50, cy=50, r=3)
  text(x=50, y=50) 25
  circle(cx=100, cy=40, r=3)
  text(x=100, y=40) 26
  circle(cx=150, cy=60, r=3)
  text(x=150, y=60) 24
  circle(cx=200, cy=70, r=3)
  text(x=200, y=70) 23
  circle(cx=250, cy=60, r=3)
  text(x=250, y=60) 24
  circle(cx=300, cy=50, r=3)
  text(x=300, y=50) 25
  circle(cx=350, cy=40, r=3)
  text(x=350, y=40) 26
  circle(cx=398, cy=70, r=3)
  polyline(
    points="0,70 50,50 100,40 150,60 200,70 250,60 300,50 350,40 398,70"
  )
</template>

<script setup>
import { defineProps, onMounted, reactive } from 'vue'

onMounted(()=>{
  console.log('mounted');
})

const state = reactive({ count: 0 })
</script>

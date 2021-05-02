<template lang="pug">
svg.raincloud(viewBox="-50 -50 100 100")
  g.cloud
    circle(cx=10, cy=3, r=15)
    circle(cx=0, cy=0, r=15)
    rect(x=-20, y=-2, width=50, height=20, rx=10)
  rect.rain(x=-25, y=8, width=4, height=13)
  rect.rain.rain2(x=-5, y=10, width=4, height=13)
  rect.rain.rain3(x=10, y=6, width=4, height=13)
</template>

<style lang="scss">
.raincloud {
  .rain {
    animation: rainfall 1.3s infinite linear;
    fill: #ccc;
  }
  .rain2 {
    animation-delay: -0.2s;
  }
  .rain3 {
    animation-delay: -0.7s;
  }
}
</style>
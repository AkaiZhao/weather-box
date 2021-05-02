<template lang="pug">
svg.suncloud(viewBox="-50 -50 100 100")
  circle.sun(cx=0, cy=0, r=20)
  g.cloud
    circle.cloud-left(cx=10, cy=3, r=15)
    circle.cloud-left(cx=0, cy=0, r=15)
    rect.cloud-left(x=-20, y=-2, width=50, height=20, rx=10)
    circle.cloud-right(cx=10, cy=3, r=15)
    circle.cloud-right(cx=0, cy=0, r=15)
    rect.cloud-right(x=-20, y=-2, width=50, height=20, rx=10)
</template>

<style lang="scss">
.cloud {
  &-left {
    transform: translateX(-12px) translatey(-4px) scale(0.55);
  }
  &-right {
    transform: translateX(16px) translatey(12px) scale(0.6);
  }
}
</style>
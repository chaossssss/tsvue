<template>
  <div id="container" class="map-box"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Map extends Vue {
  @Prop() private msg!: string
  initMap() {
    new AMap.Map('container', {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 11, //初始化地图层级
      center: [116.397428, 39.90923], //初始化地图中心点
    })
  }
  mounted(){
    this.initMap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map-box {
  width: 800px;
  height: 600px;
}
</style>

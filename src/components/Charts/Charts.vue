<template>
  <div>
    <div id="myChart" class="chart-box"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({

})
export default class Charts extends Vue {
  public $echarts: any
  initChart(): void {
    const myChart: any = this.$echarts.init(document.getElementById('myChart'))
    const options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    }
    myChart.setOption(options, true)
  }
  mounted(){
    console.log(22222)
    this.initChart()
  }
}
</script>

<style scoped lang="less">
.chart-box {
  width: 400px;
  height: 300px;
}
</style>
<template>
  <div class="hello">
    <div>+</div>
    <div>{{ times }}</div>
    <div>{{ text }}</div>
    <div>{{ ValA + computedA }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Calc extends Vue {
  // 就是data数据
  ValA: string = "hello world";
  ValB: number = 222;
  data(): { times: number; text: string } {
    return {
      times: 2,
      text: '2222'
    }
  }
  get computedA(){
    return 222
  }
  @Prop() private msg!: string
}
</script>
<style scoped lang="less">
.hello {
  color: red;
}
</style>

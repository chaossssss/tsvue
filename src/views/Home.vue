<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Charts />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
        <g>
          <text font-family="microsoft yahei" font-size="120" y="160" x="160">
            马
          </text>
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="10s"
            type="rotate"
            from="0 160 160"
            to="360 160 160"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Charts from '@/components/Charts/Charts.vue'
@Component({
  components: {
    HelloWorld,
    Charts,
  }
})
export default class Home extends Vue {}
</script>

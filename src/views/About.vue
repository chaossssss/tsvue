<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ElTable />
    <Calc />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ElTable from '@/components/Element/ElTable.vue' // @ is an alias to /src
import Calc from '@/views/Calc.vue'
@Component({
  components: {
    ElTable,
    Calc
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
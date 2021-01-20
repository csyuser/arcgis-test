<template>
  <div class="Odometer" ref="odometer"></div>
</template>

<script>
import Odometer from '@/assets/control/odometer'

export default {
  name: 'Odometer',
  props:{
    newNumber:{
      type:[Number,String]
    }
  },
  mounted(){
    this.initOdometer()
  },
  watch:{
    newNumber(){
      this.initOdometer()
    }
  },
  methods:{
    initOdometer(){
//滚动数字
      // let el = document.querySelector('#odometer');
      let el = this.$refs.odometer
      let od = new Odometer({
        el: el,
        value: 0,
        format: '(,ddd).dd',
        theme: 'default'
      });
      od.update(this.newNumber)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
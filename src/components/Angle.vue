<template>
  <div class="angle">
    <h2 class="title" v-if="title">{{ title }}</h2>
    <slot></slot>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Angle',
  props: {
    title: {type:String}
  }
}
</script>

<style scoped lang='scss'>
.angle {
  position: relative;
  border: 1px solid rgba(25, 186, 139, .17);
  background: url("../assets/images/line.png") no-repeat;
  background-size: 100%;
  padding: 0 20px 20px 20px;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1em;
    height: 1em;
    border-top: 2px solid #02a6b5;
    top: -1px;
  }

  &::before {
    left: -1px;
    border-left: 2px solid #02a6b5;
  }

  &::after {
    right: -1px;
    border-right: 2px solid #02a6b5;
  }
  > .title{
    color: #ffffff;
    font-size: 18px;
    height: 45px;
    border-bottom: 1px solid rgba(255,255,255,.2);
    line-height: 45px;
  }

  > .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;

    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1em;
      height: 1em;
      border-bottom: 2px solid #02a6b5;
      bottom: -1px;
    }

    &::before {
      left: -1px;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      right: -1px;
      border-right: 2px solid #02a6b5;
    }
  }
}
</style>
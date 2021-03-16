<template>
  <div class="wrapper">
    <div :class="`pokeball ${loading ? 'animate': ''}`"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="css" scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.wrapper {
  position: absolute;
}

.pokeball {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
}

.pokeball.animate {
  animation: frames 0.8s linear 0s infinite;
}

.pokeball:after {
  content: "";
  position: absolute;
  width: 60px;
  height: 35px;
  background-color: red;
  border-bottom: 4px solid;
  top: -4px;
}

.pokeball:before {
  content: "";
  position: absolute;
  background-color: #fff;
  width: 15px;
  height: 15px;
  border: 4px solid;
  border-radius: 50%;
  bottom: 18px;
  right: 20px;
  z-index: 1;
}

/* AnimationFrames */
@keyframes frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
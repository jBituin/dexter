<template>
  <div class="block">
    <p class="title is-size-4-desktop is-size-4-tablet is-size-5-mobile">{{value}}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String | Number,
      required: true
    }
  }
};
</script>

<style>
</style>
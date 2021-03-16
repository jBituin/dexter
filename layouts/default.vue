<template>
  <div>
    <navbar></navbar>
    <section class="section">
      <div class="container">
        <nuxt />
      </div>
    </section>
  </div>
</template>
<script>
import Navbar from '../components/Navbar';
export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>
.details-nav {
  height: 60px;
  background: red;
}
</style>
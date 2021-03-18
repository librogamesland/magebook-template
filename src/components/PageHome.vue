<template>
  <div class="page-home">
    <img src="/img/logo.jpg">
    <br>
    <button @click="store.page = 'PageBook'"> Open book</button>
  </div>
</template>
<style>
.page-home {
  text-align: center;
}

.page-home img{
  width: 140px;
  margin: 30px 0;
}
</style>

<script>
import {store} from '../store.js'

export default {
  data: () => ({store}),
}
</script>

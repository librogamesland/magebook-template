<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <component :is="store.page"/>
    </transition>
  </div>
</template>
<script>
import {store} from './store.js'
import PageHome from './components/PageHome.vue'
import PageBook from './components/PageBook.vue'


export default {
  data: () => ({store}),
  components: { PageHome, PageBook },
}
</script>
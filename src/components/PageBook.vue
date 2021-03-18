<template>
  <div class="page-book">
    <h3>
      Chapter {{book.chapters[store.key].title || store.key}}
      <button @click="store.page = 'PageHome'"> go back <i class="zmdi zmdi-home"></i></button>
    </h3>
    <hr/>
    <v-runtime-template
      :template="`<div class='content'>${book.chapters[store.key].text}</div>`">
    </v-runtime-template>
  </div>
</template>
<script>
import {store} from '../store.js'
import book from '../book.md'
import VRuntimeTemplate from "vue3-runtime-template"
import MageLink from './MageLink.vue'

export default {
  data: () => ({
    store, book
  }),
  components: {VRuntimeTemplate, MageLink},
}
</script>

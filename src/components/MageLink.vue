<template>
  <a class="lgc-link" @click="store.key = to">
    <slot></slot>
  </a>
</template>
<script>
  import {store} from '../store.js'
  export default {
    data: () => ({store}),
    props: ['to'],
  }
</script>
<style>
  .lgc-link {
    font-weight: bold;
    text-decoration: underline;
    color: blue;
  }
</style>

<template>
  <div>
    <my-Addition></my-Addition>
    <p>---------------------------------------</p>

    <my-Subtraction></my-Subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  data () {
    return {}
  },
  components: {
    'my-Addition': Addition,
    'my-Subtraction': Subtraction
  }
}
</script>

<style></style>

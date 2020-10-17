<template>
  <div>
    <!-- <h3>当前最新的count值为:{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-n</button>
    <button @click="subAsync">-1 Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync']),
    btnHandler1 () {
      this.sub()
    },
    btnHandler2 () {
      this.subN(2)
    }
  }
}
</script>

<style scoped>

</style>

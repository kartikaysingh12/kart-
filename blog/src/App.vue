<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <HelloWorld msg="NAMASTE VUE"/>
    <childBro/>
    <experimentNew/>
  </div>
</template>

<script>
import childBro from './components/childBro.vue'
import HelloWorld from './components/HelloWorld.vue'
import experimentNew from './components/experimentNew.vue'
export default {
  name: 'App',
  components: {
    childBro,
    HelloWorld,
    experimentNew
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

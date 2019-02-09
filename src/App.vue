<template>
  <div id="app">
    <MyTaskListView />
  </div>
</template>

<script>
import MyTaskListView from '@/views/MyTaskList.vue'

export default {
  name: 'App',
  components: {
    MyTaskListView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

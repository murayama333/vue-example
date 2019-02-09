<template>
  <div>
    <h1>My Task List</h1>
    <ul>
      <li v-for="(task, i) in tasks" :key="i">{{ task }}</li>
    </ul>
    <form action="">
      <input id="my-task-text" v-model="newTask" type="text" name="">
      <input type="button" value="add" @click="onclick">
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
    newTask: {
      get () {
        return this.$store.state.newTask
      },
      set (newTask) {
        this.$store.commit('updateNewTask', { newTask })
      }
    }
  },
  methods: {
    onclick () {
      this.$store.dispatch({
        type: "addTask",
        task: this.newTask
      })
      // this.$store.dispatch()
    }
  }
}
</script>
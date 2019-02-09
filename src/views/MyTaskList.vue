<template>
  <div>
    <h1>My Task List</h1>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <ul v-else>
      <li v-for="(task, i) in tasks" :key="i">{{ task }}</li>
    </ul>
    <form action="">
      <input id="my-task-text" v-model="newTask" type="text" name="">
      <input type="button" value="add" @click="onclick">
      <input type="button" value="load" @click="onclick2">
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
    },
    loading () {
      return this.$store.state.loading
    }
  },
  async mounted () {
    this.$store.dispatch({
      type: "loadTasks"
    })
    console.log("mounted")
  },
  methods: {
    onclick () {
      this.$store.dispatch({
        type: "addTask",
        task: this.newTask
      })
    },
    onclick2 () {
      this.$store.dispatch({
        type: "loadTasks"
      })
    }
  }
}
</script>
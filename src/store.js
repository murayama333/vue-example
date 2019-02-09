import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: ["Task1", "Task2"],
    newTask: ""
  },
  mutations: {
    addTask (state, { task }) {
      state.tasks.push(task)
      state.newTask = ""
    },
    updateNewTask (state, { newTask }) {
      state.newTask = newTask 
    },
  },
  actions: {
    addTask ({ commit }, payload) {
      commit('addTask', payload)
    },
  }
})

export default store
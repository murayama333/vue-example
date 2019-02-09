import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [],
    newTask: "",
    loading: true
  },
  mutations: {
    addTask (state, { task }) {
      state.tasks.push(task)
      state.newTask = ""
    },
    updateNewTask (state, { newTask }) {
      state.newTask = newTask 
    },
    loadTasks (state, { tasks }) {
      state.tasks = tasks;
      state.loading = false
    },
    initTasks (state) {
      state.loading = true
    }
  },
  actions: {
    addTask ({ commit }, payload) {
      const db = firebase.firestore()
      db.collection('tasks').add({
        task: payload.task
      }).then(docRef => commit('addTask', payload)).catch(error => console.log(error))
    },
    loadTasks ({ commit }) {
      commit('initTasks')
      const db = firebase.firestore()
      db.collection("tasks").get().then((querySnapshot) => {
        const tasks = []
        querySnapshot.forEach((doc) => {
            tasks.push(doc.data().task)
        });
        commit('loadTasks', { tasks }) 
      });
    }
  }
})

export default store
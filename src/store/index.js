import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const NASA_KEY="H4ViujClUioe4GXXNiKAcjkikRDHAtUowmiCBD5f";

export default new Vuex.Store({
  state: {
    apod: ''
  },
  mutations: {
    GET_APOD(state, apod){
      state.apod = apod
    }
    },
  actions: {
    getApod({commit}){
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(response => {
        console.log(response.data)
          commit("GET_APOD", response.data)
      }).catch(() => {
        commit("GET_APOD", {
          url:"https://apod.nasa.gov/apod/image/2010/NGC5643_HubbleZamani_960.jpg"
        })
      })
    }
  },
  modules: {
  }
})

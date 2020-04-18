import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import axios from "axios"
import { api } from "./AxiosStore";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: 'https://cw-bloggr.herokuapp.com/api/',
  timeout: 3000,
})

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    getBlogs(state, blogs) {
      state.blogs = blogs
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({ commit, dispatch }) {
      try {
        let res = await _api.get('blogs')
        console.log(res.data)
        commit("getBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
});

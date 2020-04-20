import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeProfile: {},
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    getBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveProfile(state, profile) {
      state.activeProfile = profile
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
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
        let res = await api.get('blogs')
        console.log(res.data)
        commit("getBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogById({ commit, dispatch }, id) {
      try {
        let res = await api.get('blogs/' + id)
        console.log(res.data)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addComment({ commit, dispatch }, comment) {
      try {
        await api.post('comments', comment)
        dispatch('getBlogById', comment.blogId)
      } catch (error) {
        console.error(error)
      }
    },
    async getThisBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        dispatch('setActiveBlog', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch }, commentId) {
      try {
        await api.delete('comments/' + commentId)
      } catch (error) {
        console.error(error)
      }
    },
    async editComment({ commit, dispatch }, comment) {
      try {
        await api.put('comments/' + comment.id, comment)
      } catch (error) {
        console.error(error)
      }
    },
    async editBlog({ commit, dispatch }, blog) {
      try {
        await api.put('blogs/' + blog.id, blog)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({ commit, dispatch }, blog) {
      try {
        console.log(blog);

        await api.delete('blogs/' + blog.id)
      } catch (error) {
        console.error(error)
      }
    },
    async getMyBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('')
      } catch (error) {

      }
    }
  },
});

<template>
  <div class="about container-fluid text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
    <br />
    <br />
    <div class="row justify-content-center">
      <Blog v-for="blog in blogs" :key="blog.id" :blogData="blog" />
    </div>
    <div class="row justify-content-center">
      <Comment v-for="comment in comments" :key="comment.id" :commentData="comment" />
    </div>
  </div>
</template>


<script>
import Blog from "../components/Blog.vue";
import Comment from "../components/Comment.vue";
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getMyBlogs");
    this.$store.dispatch("getMyComments");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.myBlogs;
    },
    comments() {
      return this.$store.state.myComments;
    }
  },
  components: {
    Blog,
    Comment
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

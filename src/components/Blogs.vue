<template>
  <div class="blogs row justify-content-center">
    <CreateBlog v-if="$auth.isAuthenticated">CreateBlog component not loaded.</CreateBlog>
    <Blog v-for="blog in blogs" :key="blog._id" :blogData="blog">Blog components not loaded.</Blog>
  </div>
</template>


<script>
import Blog from "@/components/Blog.vue";
import CreateBlog from "@/components/CreateBlog.vue";
export default {
  name: "blogs",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$auth);

    this.$store.dispatch("getBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {},
  components: {
    Blog,
    CreateBlog
  }
};
</script>


<style scoped>
</style>
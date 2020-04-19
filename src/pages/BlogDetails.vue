<template>
  <div class="blogDetails row justify-content-center">
    <div class="col-10 shadow border my-3 p-2 bg-light">
      <img :src="activeBlog.imgUrl" class="img-fluid" :alt="activeBlog.title" />
      <h4>{{activeBlog.title}}</h4>
      <p>{{activeBlog.body}}</p>
      <p class="p-0 m-0">
        <small>
          <b>from</b>
          :
          <a @click="setActiveUser(activeBlog.creator)">{{activeBlog.creator.name}}</a>
        </small>
      </p>
    </div>
  </div>
</template>


<script>
import Blog from "@/components/Blog.vue";

export default {
  name: "blogDetails",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBlogById", this.$route.params.id);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog.blog;
    }
  },
  methods: {
    setActiveUser(creator) {
      this.$store.commit("setActiveProfile", creator);
      this.$router.push({
        name: "ProfileDetails",
        params: { email: this.activeBlog.creator.email }
      });
    }
  },
  components: { Blog }
};
</script>


<style scoped>
</style>
<template>
  <div class="create-blog col-7 border shadow bg-dark text-white p-2 m-2">
    <div class="form-group">
      <label for="imgUrl">Image URL:</label>
      <input
        type="url"
        class="form-control"
        placeholder="Link to an image..."
        v-model="newBlogPost.imgUrl"
      />
    </div>
    <div class="form-group">
      <label for="title">Title:</label>
      <input
        type="text"
        name="title"
        id="blogTitle"
        class="form-control"
        placeholder="Title your blog post..."
        v-model="newBlogPost.title"
        required
      />
    </div>
    <div class="form-group">
      <label for="body">Main body:</label>
      <textarea
        type="text"
        name="body"
        id="blogBody"
        class="form-control"
        placeholder="Enter your main content..."
        v-model="newBlogPost.body"
        required
      />
    </div>
    Submitting as: {{this.$auth.userInfo.name}}
    <button
      type="button"
      class="btn btn-secondary btn-block"
      @click="addBlog()"
    >Add Blog Post</button>
  </div>
</template>


<script>
export default {
  name: "create-blog",
  data() {
    return {
      newBlogPost: {}
    };
  },
  computed: {},
  methods: {
    addBlog() {
      this.newBlogPost.creatorEmail = this.$auth.userInfo.email;
      this.$store.dispatch("addBlog", this.newBlogPost);
      this.newBlogPost = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
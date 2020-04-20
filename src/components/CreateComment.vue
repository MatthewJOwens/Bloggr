<template>
  <div class="create-comment col-5 border shadow p-2 m-2">
    <form class="form-group" @submit.prevent="addComment()">
      <textarea
        name="commentBody"
        class="form-control"
        placeholder="Have something to say?"
        v-model="newComment.body"
      />
      <button class="btn btn-sm btn-primary" type="submit">Submit</button>
    </form>
    Submitting as: {{this.$auth.userInfo.name}}
  </div>
</template>


<script>
export default {
  name: "create-comment",
  data() {
    return {
      newComment: {}
    };
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog;
    }
  },
  methods: {
    addComment() {
      this.newComment.creatorEmail = this.$auth.userInfo.email;
      this.newComment.blogId = this.blog._id;
      console.log(this.newComment);

      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {};
      this.$router.push({
        name: "BlogDetails",
        params: this.$route.params.id
      });
      this.$store.commit("setActiveBlog", blog);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
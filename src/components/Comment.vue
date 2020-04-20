<template>
  <div class="comment col-7 border shadow m-2 p-2 d-flex justify-content-between">
    <div v-if="!editing">
      <p>
        {{commentData.body}}
        <b>-{{commentData.creator.name}}</b>
      </p>
    </div>
    <div v-else>
      <form class="form-group">
        <textarea rows="5" cols="50" v-model="commentData.body" />
        <button
          class="btn btn-sm btn-outline-success"
          type="button"
          @click="editComment()"
        >Submit Changes</button>
      </form>
    </div>
    <div v-if="this.$auth.isAuthenticated">
      <button
        class="btn btn-outline-secondary"
        v-if="commentData.creator.name == profile.name"
        @click="editing=true"
      >Edit</button>
      <button
        class="btn btn-danger"
        v-if="commentData.creator.name == profile.name"
        @click="deleteComment(commentData.id)"
      >Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {
      editing: false
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    async deleteComment(id) {
      console.log(this.commentData);

      await this.$store.dispatch("deleteComment", id);
      this.$store.dispatch("getBlogById", this.commentData.blogId);
    },
    async editComment() {
      await this.$store.dispatch("editComment", this.commentData);
      this.editing = false;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
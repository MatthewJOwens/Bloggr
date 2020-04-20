<template>
  <div class="blogDetails row justify-content-center">
    <div class="col-10 shadow border my-3 p-2 bg-light">
      <img
        v-if="activeBlog.imgUrl"
        :src="activeBlog.imgUrl"
        class="img-fluid"
        :alt="activeBlog.title"
      />
      <div v-if="!editing">
        <h4>{{activeBlog.title}}</h4>
        <p>{{activeBlog.body}}</p>
        <p class="p-0 m-0">
          <small>
            <b>from</b>
            :
            <a @click="setActiveUser(activeBlog.creator)">{{activeBlog.creator.name}}</a>
          </small>
        </p>
        <div v-if="this.$auth.isAuthenticated">
          <button
            class="btn btn-outline-secondary"
            v-if="activeBlog.creator.name == profile.name"
            @click="editing=true"
          >Edit</button>
          <button
            class="btn btn-danger"
            v-if="activeBlog.creator.name == profile.name"
            @click="deleteBlog()"
          >Delete</button>
        </div>
      </div>

      <div v-else class="form-group">
        <label for="imgUrl">Image URL (optional):</label>
        <input
          type="text"
          name="imgUrl"
          placeholder="Image URL (Optional)"
          v-model="activeBlog.imgUrl"
          size="50"
        />
        <div>
          <input type="text" v-model="activeBlog.title" size="60" />
        </div>
        <textarea v-model="activeBlog.body" cols="100" rows="5"></textarea>
        <button
          class="btn btn-sm btn-outline-success"
          type="button"
          @click="editBlog()"
        >Submit Changes</button>
      </div>
    </div>

    <Comment v-for="comment in comments" :key="comment.id" :commentData="comment" />
    <CreateComment v-if="this.$auth.isAuthenticated" :blogData="activeBlog" />
  </div>
</template>


<script>
import CreateComment from "@/components/CreateComment.vue";
import Comment from "@/components/Comment.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "blogDetails",
  data() {
    return {
      editing: false
    };
  },
  created() {
    this.$store.dispatch("getBlogById", this.$route.params.id);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog.blog;
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    setActiveUser(creator) {
      this.$store.commit("setActiveProfile", creator);
      this.$router.push({
        name: "ProfileDetails",
        params: { email: this.activeBlog.creator.email }
      });
    },
    async editBlog() {
      await this.$store.dispatch("editBlog", this.activeBlog);
      this.editing = false;
    },
    async deleteBlog() {
      await this.$store.dispatch("deleteBlog", this.activeBlog);
      this.$router.push({ name: "Home" });
    }
  },
  components: { Blog, Comment, CreateComment }
};
</script>


<style scoped>
</style>
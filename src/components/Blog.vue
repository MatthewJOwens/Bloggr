<template>
  <div class="blog col-10 shadow border my-3 p-2 bg-light">
    <img :src="blogData.imgUrl" class="img-fluid" :alt="blogData.title" />
    <h4>{{blogData.title}}</h4>
    <p>{{blogData.body}}</p>
    <p>
      <small>
        <b>from</b>
        :
        <a @click="setActiveUser(blogData.creator)">{{blogData.creator.name}}</a>
      </small>
    </p>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveUser(creator) {
      this.$store.commit("setActiveProfile", creator);
      this.$router.push({
        name: "ProfileDetails",
        params: { email: this.blogData.creator.email }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
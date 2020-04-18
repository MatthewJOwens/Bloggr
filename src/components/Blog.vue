<template>
  <div class="blog">
    <img :src="blogData.imgUrl" class="img-fluid" :alt="blogData.title" />
    <h4>{{blogData.title}}</h4>
    <p>{{blogData.body}}</p>
    <p>
      <small>
        <b>from</b>
        : {{blogData.creator.name}}
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
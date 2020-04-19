<template>
  <div class="about text-center">
    <h1>{{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "profile-details",
  computed: {
    profile() {
      return this.$store.state.activeProfile;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

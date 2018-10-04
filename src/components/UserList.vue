<template>
<ul class="list-reset">
  <li v-for="user in users" :key="user.name">
    <User :user="user" />
  </li>
</ul>
</template>

<script>
import User from "./User.vue";

export default {
  components: { User },
  props: {
    users: { type: Array, default: () => [] }
  }
};
</script>

<style scoped>
</style>

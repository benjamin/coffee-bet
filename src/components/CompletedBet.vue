<template>
<div>
  {{ bet.text }}
  <div class="flex items-center text-xs my-1">
    <span class="font-bold pt-1 uppercase text-grey-dark">Between:</span>
    <span v-for="user in bet.between" :key="user" class="mx-1 px-2 bg-grey-lighter rounded-full cursor-pointer" :class="{ 'bg-blue': isWinner(user)}">
      {{ user }}
    </span>
    <a @click="reinstate" class="cursor-pointer mx-5">Reinstate</a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    bet: Object
  },
  computed: {},
  methods: {
    reinstate() {
      this.$root.store.reinstateBet(this.bet);
    },

    isWinner(user) {
      return this.bet.winner === user;
    }
  }
};
</script>

<style scoped>
</style>

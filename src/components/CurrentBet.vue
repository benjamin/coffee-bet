<template>
<div>
  {{ bet.text }}
  <div class="flex items-center text-xs my-1">
    <span class="font-bold pt-1 uppercase text-grey-dark">Between:</span>
    <a v-for="user in bet.between" :key="user" @click="setWinner(user)" class="mx-1 px-2 bg-grey-lighter rounded-full cursor-pointer">
      {{ user }}
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    bet: Object
  },

  methods: {
    setWinner(winner) {
      this.$root.store.completeBet(this.bet, winner);
    }
  }
};
</script>

<style scoped>
</style>

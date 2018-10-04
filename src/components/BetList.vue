<template>
  <ul class="list-reset">
    <li v-for="bet in bets" :key="bet.id" class="my-3">
      <CompletedBet v-if="bet.winner" :bet="bet" />
      <CurrentBet v-else :bet="bet" />
    </li>
  </ul>
</template>

<script>
import CompletedBet from "./CompletedBet.vue";
import CurrentBet from "./CurrentBet.vue";

export default {
  components: { CompletedBet, CurrentBet },
  props: {
    bets: { type: Array, default: () => [] }
  }
};
</script>

<style scoped>
</style>

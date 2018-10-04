<template>
<div class="text-grey-darker table-row w-100">
  <span class="table-cell w-1/2">☕️ {{ user.name }}</span>
  <span class="table-cell text-right">{{ owesCount }}</span>
  <span class="table-cell text-right pl-2">{{ owedCount }}</span>
</div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  computed: {
    owes() {
      return this.user.owes.length > 0;
    },

    owed() {
      return this.user.owed.length > 0;
    },

    owesCount() {
      return `owes ${this.user.owes.length}`;
    },

    owedCount() {
      return `owed ${this.user.owed.length}`;
    },

    owesList() {
      return this.user.owes.join(", ");
    },

    owedList() {
      return this.user.owed.join(", ");
    }
  }
};
</script>

<style>
</style>

<template>
  <div id="app">
    <Header />
    <div class="w-full max-w-xl mx-auto px-6">
      <div class="pt-24 flex w-100">
        <div class="flex-auto pr-12">
          <div>
            <NewBetInput :users="users" v-model="newBet" />
          </div>
          <div class="my-8 pt-3 border-t border-grey-lighter">
            <h2 class="text-lg uppercase text-grey-darker">Current Bets</h2>
            <BetList :bets="inprogressBets" />
          </div>

          <div class="my-8 pt-3 border-t border-grey-lighter">
            <h2 class="text-lg uppercase text-grey-darker">Past Bets</h2>
            <BetList :bets="completedBets" />
          </div>
        </div>
        <div class="text-sm">
          <UserList :users="users" />
          <div class="my-5">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Add New User
            </label>
            <TextInput v-model.trim="newUser" placeholder="Name" @blur.native="addUser(newUser)" @keyup.enter.native="addUser(newUser)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetList from "./components/BetList.vue";
import UserList from "./components/UserList.vue";
import NewBetInput from "./components/NewBetInput.vue";
import Header from "./components/Header.vue";
import TextInput from "./components/TextInput.vue";

export default {
  name: "app",
  components: { Header, BetList, UserList, NewBetInput, TextInput },

  data() {
    return {
      newUser: null,
      newBet: null
    };
  },

  computed: {
    store() {
      return this.$root.store;
    },

    state() {
      return this.store.state;
    },

    users() {
      return this.store.getUsers();
    },

    inprogressBets() {
      return this.store.getInprogressBets();
    },

    completedBets() {
      return this.store.getCompletedBets();
    }
  },

  watch: {
    newBet(bet) {
      this.store.placeBet(bet);
    }
  },

  methods: {
    addUser(name) {
      if (name) {
        this.store.addUser(name);
      }

      this.newUser = null;
    }
  }
};
</script>

<style>
</style>

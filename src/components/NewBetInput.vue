<template>
<div>
  <div>
    <TextInput v-model.trim="text" placeholder="What's the bet?" />
  </div>
  <div class="my-3 flex">
    <div class="flex-auto flex">
      <UserSelect v-model="userOne" :users="userOneList" class="w-1/2 mr-3" />
      <UserSelect v-model="userTwo" :users="userTwoList" class="w-1/2 mr-3" />
    </div>
    <button @click="add" class="bg-purple hover:bg-purple-light text-white font-bold py-2 px-4 rounded">
      Let's do this!
    </button>
  </div>
</div>
</template>

<script>
import TextInput from "./TextInput.vue";
import UserSelect from "./UserSelect.vue";

export default {
  components: { TextInput, UserSelect },
  props: {
    users: Array
  },
  data() {
    return {
      text: null,
      userOne: null,
      userTwo: null
    };
  },

  computed: {
    userOneList() {
      return this.users.filter(user => user.name !== this.userTwo);
    },

    userTwoList() {
      return this.users.filter(user => user.name !== this.userOne);
    }
  },

  methods: {
    clear() {
      this.text = null;
      this.userOne = null;
      this.userTwo = null;
    },

    add() {
      if (this.text && this.userOne && this.userTwo) {
        this.$emit("input", {
          text: this.text,
          between: [this.userOne, this.userTwo]
        });
        this.clear();
      }
    }
  }
};
</script>

<style scoped>
</style>

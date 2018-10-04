<template>
<input
  :value="value"
  @input="$emit('input', $event.target.value)"
  type="text"
  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey">
</template>

<script>
export default {
  props: {
    value: String
  }
};
</script>

<style>
</style>

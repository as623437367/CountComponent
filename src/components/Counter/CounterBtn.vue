<template>
  <div>
    <button :action="action" @click="compute">{{ innerText }}</button>
  </div>
</template>

<script>
export default {
  name: "CounterBtn",
  props: {
    action: String,
    innerText: String
  },
  methods: {
    compute() {
      this.$emit("dispatch", this.action);
    }
  }
};
</script>

<style scoped></style>

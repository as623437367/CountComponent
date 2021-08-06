<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: "CounterResult",
  props: {
    result: Number
  }
};
</script>

<style scoped></style>

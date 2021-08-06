<template>
  <div>
    <Counter-result :result="result" />
    <div>
      <Counter-btn innerText=" + " action="PLUS" @dispatch="dispatch" />
      <Counter-btn innerText=" - " action="MINUS" @dispatch="dispatch" />
    </div>
  </div>
</template>

<script>
import CounterResult from "./CounterResult";
import CounterBtn from "./CounterBtn";
import dispatch from "@/dispatchers/counter";
export default {
  name: "Counter",
  data() {
    return {
      result: 0
    };
  },
  components: {
    CounterResult,
    CounterBtn
  },
  methods: {
    // compute(action) {
    //   console.log(action);
    //   switch (action) {
    //     case "PLUS":
    //       this.result += 1;
    //       break;
    //     case "MINUS":
    //       this.result -= 1;
    //       break;
    //     default:
    //       break;
    //   }
    // }
    dispatch(type) {
      console.log(type);
      dispatch(this)(type);
    }
  }
};
</script>

<style scoped></style>

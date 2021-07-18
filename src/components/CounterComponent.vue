<template>
<div id="result">
  <span id="component-name">Counter Component</span>
  <p>Current counter is: {{ counter }}</p>
  <p>counter * 2 = {{ doubleCounter }}</p>
  <reset-component />
</div>
</template>

<script>
import ResetComponent from './ResetComponent';
export default {
  name: 'CounterComponent',
  components: {
    ResetComponent
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
  },
}
</script>

<style scoped>
#result {
  border: 1px solid #2c3e50;
  background-color: coral;
  padding: 20px;
}

#component-name {
  float: left;
}
</style>
<template>
  <div id="result">
    <span id="component-name">Second Store Component</span>
    <p>Current counter is: {{ counter }}</p>
    <p>counter * 100 = {{ hundredCounter }}</p>
    <update-component />
    <reset-component />
  </div>
</template>

<script>
import ResetComponent from './ResetComponent';
import UpdateComponent from './UpdateComponent';

export default {
  name: 'SecondStoreComponent',
  components: {
    ResetComponent,
    UpdateComponent,
  },
  computed: {
    counter() {
      return this.$store.state.second.counter;
    },
    hundredCounter() {
      return this.$store.getters['second/hundredCounter'];
    }
  }
}
</script>

<style scoped>
#result {
  margin-top: 50px;
  border: 1px solid #2c3e50;
  background-color: lemonchiffon;
  padding: 20px;
}

#component-name {
  float: left;
}
</style>
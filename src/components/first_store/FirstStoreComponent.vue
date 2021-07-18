<template>
  <div id="result">
    <span id="component-name">First Store Component</span>
    <p>Current counter is: {{ counter }}</p>
    <p>counter * 10 = {{ tenCounter }}</p>
    <update-component />
    <reset-component />
  </div>

</template>

<script>
import UpdateComponent from './UpdateComponent';
import ResetComponent from './ResetComponent';

export default {
  name: 'FirstStoreComponent',
  components:{
    UpdateComponent,
    ResetComponent,
  },
  computed: {
    counter() {
      return this.$store.state.first.counter;
    },
    tenCounter() {
      return this.$store.getters['first/tenCounter'];
    }
  },
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
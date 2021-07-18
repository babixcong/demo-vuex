<template>
<div id="update">
  <span id="component-name">Update component</span>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</div>
</template>

<script>
export default {
  name: 'UpdateComponent',
  methods: {
    increment() {
      this.$store.dispatch('second/increment');
    },
    decrement() {
      this.$store.dispatch('second/decrement');
    }
  }
}
</script>

<style scoped>
#update {
  margin-top: 20px;
  border: 1px solid #2c3e50;
  background-color: antiquewhite;
  padding: 30px;
}

#update button {
  margin: 10px;
}

#component-name {
  float: left;
}
</style>
<template>
<div id="reset">
  <span id="reset-name">Reset Component</span>
  <button @click="reset">Reset counter</button>
</div>
</template>

<script>
export default {
  name: 'ResetComponent',
  methods: {
    reset() {
      this.$store.dispatch('second/resetCounter');
    }
  }
}
</script>

<style scoped>
#reset {
  background-color: beige;
  margin-top: 10px;
  padding: 30px;
}

#reset-name {
  float: left;
}
</style>
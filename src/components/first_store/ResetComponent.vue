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
      this.$store.dispatch('first/resetCounter');
    }
  }
}
</script>

<style scoped>
#reset {
  background-color: olivedrab;
  margin-top: 10px;
  padding: 30px;
}

#reset-name {
  float: left;
}
</style>
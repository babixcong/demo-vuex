<template>
  <div id="app">
<!--    <div id="single-store">-->
<!--      <span id="single-name">Single Store Component</span>-->
<!--      <counter-component />-->
<!--      <update-component />-->
<!--    </div>-->
    <div id="central-store">
      <span id="central-name">Central store component</span>
      <first-store-component />
      <second-store-component />
    </div>
  </div>
</template>

<script>
// import CounterComponent from './components/CounterComponent';
// import UpdateComponent from './components/UpdateComponent';
import FirstStoreComponent from './components/first_store/FirstStoreComponent';
import SecondStoreComponent from './components/second_store/SecondStoreComponent';

export default {
  name: 'App',
  components: {
    // CounterComponent,
    // UpdateComponent,
    FirstStoreComponent,
    SecondStoreComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#single-store {
  background-color: cornflowerblue;
  padding: 20px;
}

#single-name {
  color: white;
}

#central-store {
  padding: 20px;
  background-color: blueviolet;
}

#central-name {
  color: white;
}
</style>

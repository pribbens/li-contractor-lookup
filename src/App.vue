<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@media (min-width: 400px) {
  #app {
    width: 100%;
    margin: auto;
  }
}

@media (min-width: 550px) {
  #app {
    width: 75%;
    margin: auto;
  }
}

@media (min-width: 1100px) {
  #app {
    width: 60%;
    margin: auto;
  }
}
</style>

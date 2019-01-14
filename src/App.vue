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
  }
}

@media (min-width: 550px) {
  #app {
    width: 100%;
  }
}

@media (min-width: 1100px) {
  #app {
    width: 80%;
    margin: auto;
  }
}

@media (min-width: 1550px) {
  #app {
    width: 70%;
    margin: auto;
  }
}

@media (min-width: 1600px) {
  #app {
    width: 60%;
    margin: auto;
  }
}
</style>

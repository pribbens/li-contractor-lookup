<template>
  <div class="outer-container">
    <div class="app-container" id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.outer-container {
  background-color: #f0f0f0;
}

@media (min-width: 400px) {
  .app-container {
    width: 100%;
  }
}

@media (min-width: 550px) {
  .app-container {
    width: 100%;
  }
}

@media (min-width: 1100px) {
  .app-container {
    width: 70%;
    margin: auto;
  }
}

@media (min-width: 1650px) {
  .app-container {
    width: 60%;
    margin: auto;
  }
}

@media (min-width: 1700px) {
  .app-container {
    width: 40%;
    margin: auto;
  }
}
</style>

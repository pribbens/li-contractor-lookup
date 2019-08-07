<template>
  <div>
    <div class="card-divider text-center">
      <h5>Contractors can use this tool to look up the statuses of their permits.</h5>
      <h5>
        <b>NOTE:</b> Actions made in the last 24 hours may not be
        reflected on site
      </h5>
    </div>
    <appTable class="table"></appTable>
  </div>
</template>

<script>
import Table from "../components/Table";

export default {
  name: "app",
  components: {
    appTable: Table
  }
};
</script>

<style>
.card-divider {
  background-color: rgb(197, 197, 197);
}

.table {
  background-color: white;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 4em;
}

@media (min-width: 400px) {
  .table {
    padding-left: 0em;
    padding-right: 0em;
  }
}

@media (min-width: 550px) {
  .table {
    padding-left: 0em;
    padding-right: 0em;
  }
}

@media (min-width: 1100px) {
  .app-container {
    padding-left: 1em;
    padding-right: 1em;
  }
}

@media (min-width: 1350px) {
  .app-container {
    margin: auto;
    padding-left: 1em;
    padding-right: 1em;
  }
}

@media (min-width: 1550px) {
  .app-container {
    padding-left: 1em;
    padding-right: 1em;
  }
}

@media (min-width: 1600px) {
  .app-container {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>

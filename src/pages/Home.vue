<template>
  <div>
    <div class="container greeting text-center">
      <p>Contractors can use this tool to look up the statuses of their active permits.</p>
      <p>
        <b>NOTE:</b> Actions made in the last 24 hours may not be
        reflected on site
      </p>
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
.greeting {
  padding-top: 2em;
  width: 50%;
  margin: auto;
}

.table {
  padding-bottom: 4em;
}

@media (min-width: 1350px) {
  .table {
    width: 90%;
    margin: auto;
  }
}

@media (min-width: 1350px) {
  .table {
    width: 100%;
    margin: auto;
  }
}
</style>

<template>
  <div>
    <div class="container greeting text-center">
      <p>Contractors can use this tool to look up the statuses of their active permits.</p>
      <p>
        <b>NOTE:</b> Actions made in the last 24 hours may not be
        reflected on site
      </p>
    </div>
    <appControls></appControls>
    <appTable class="table"></appTable>
  </div>
</template>

<script>
import Controls from "../components/Controls";
import Table from "../components/Table";

export default {
  name: "app",
  components: {
    appControls: Controls,
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
</style>

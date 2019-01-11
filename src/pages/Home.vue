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
    <appTable :permits="permits" class="table"></appTable>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { DATE_FORMAT, REST_SERVICE_URL } from "../utils";
import Controls from "../components/Controls";
import Table from "../components/Table";

export default {
  name: "app",
  data() {
    return {
      permits: []
    };
  },
  methods: {
    async fetchPermits() {
      const response = await axios.get(REST_SERVICE_URL);
      this.permits = response.data.features.map(permit => {
        permit.attributes.ISSUEDATE = moment(permit.attributes.ISSUEDATE)
          .utc()
          .format(DATE_FORMAT);
        return permit.attributes;
      });
    }
  },
  beforeMount() {
    this.fetchPermits();
  },
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

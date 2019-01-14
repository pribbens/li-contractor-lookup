<template>
  <div>
    <appControls @contractorSearch="contractorSearch" @permitNumberSearch="permitNumberSearch"></appControls>
    <div class="container">
      <table v-show="permits.length > 0" role="grid" class="table text-center">
        <tbody>
          <tr>
            <th scope="col">Permit Number</th>
            <th scope="col">Application Type</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Issue Date</th>
            <th scope="col">Permit Description</th>
          </tr>
          <tr v-for="permit in permits" :key="permit.id">
            <td>{{ permit.PERMITNUMBER }}</td>
            <td>{{ permit.APPLICATIONTYPE }}</td>
            <td>{{ permit.ADDRESS }}</td>
            <td>{{ permit.STATUS }}</td>
            <td>{{ permit.ISSUEDATE }}</td>
            <td>
              <router-link :to="{ name: 'permit', params: { id: permit.PERMITNUMBER } }">Link</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <a
          v-show="permits.length > 0 && allowLoadMore && !loading"
          @click.prevent="fetchPermits"
        >Load More...</a>
      </div>
      <h3 v-show="loading && allowLoadMore" class="text-center">Loading please wait...</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { DATE_FORMAT, BASE_REST_SERVICE_URL } from "../utils";
import Controls from "./Controls";

export default {
  name: "Table",
  data() {
    return {
      loading: false,
      allowLoadMore: true,
      permits: [],
      whereClause: encodeURI("where=1=1"),
      defaultQueryParams: {
        outFields: "*",
        orderByFields: "issuedate+desc",
        resultOffset: null,
        resultRecordCount: 50,
        sqlFormat: "none",
        f: "pjson"
      }
    };
  },
  computed: {
    queryParams() {
      const queryParams = Object.assign({}, this.defaultQueryParams);
      queryParams.resultOffset = this.permits.length;
      return queryParams;
    },
    queryUrl() {
      let url = BASE_REST_SERVICE_URL.slice() + this.whereClause;

      for (let key in this.queryParams) {
        const queryParam =
          encodeURI("&") +
          encodeURI(key) +
          encodeURI("=") +
          encodeURI(this.queryParams[key]);
        url += queryParam;
      }
      return url;
    }
  },
  methods: {
    async fetchPermits() {
      this.loading = true;
      try {
        const response = await axios.get(this.queryUrl);
        console.log(this.queryUrl);
        const newPermits = response.data.features.map(permit => {
          permit.attributes.ISSUEDATE = moment(permit.attributes.ISSUEDATE)
            .utc()
            .format(DATE_FORMAT);
          return permit.attributes;
        });
        this.permits = this.permits.concat(newPermits);
      } catch {
        this.allowLoadMore = false;
      } finally {
        this.loading = false;
      }
    },
    contractorSearch(contractor) {
      this.whereClause =
        encodeURI("where=contractorname like'%") +
        encodeURI(contractor) +
        encodeURI("%'");
      this.defaultQueryParams.resultRecordCount = 500;
      this.permits = [];
      this.fetchPermits();
      this.allowLoadMore = false;
    },
    permitNumberSearch(permitNumber) {
      this.whereClause =
        encodeURI("where=permitnumber='") +
        encodeURI(permitNumber) +
        encodeURI("'");
      this.permits = [];
      this.fetchPermits();
      this.allowLoadMore = false;
    }
  },
  beforeMount() {
    this.fetchPermits();
  },
  components: {
    appControls: Controls
  }
};
</script>

<style scoped>
@media (max-width: 400px) {
  table {
    table-layout: fixed;
  }
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  .table {
    overflow-x: auto;
    display: block;
  }
}
</style>



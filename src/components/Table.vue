<template>
  <div>
    <table v-show="message && !loading" class="service-update">
      <tr
        scope="row"
        :class="{'service-update--critical': permits.length == 0,  'service-update': permits.length > 0}"
      >
        <td class="pam">
          <span
            class="text-center message"
          >Your search resulted in {{ permits.length }} active permits.</span>
        </td>
      </tr>
    </table>
    <appControls @contractorSearch="contractorSearch" @permitNumberSearch="permitNumberSearch"></appControls>
    <div class="container">
      <table v-show="permits.length > 0 && !loading" role="grid" class="table text-center">
        <tbody>
          <tr>
            <th scope="col">Permit Number</th>
            <th scope="col">Application Type</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Issue Date</th>
          </tr>
          <router-link
            v-for="permit in permits"
            :key="permit.id"
            :to="{ name: 'permit', params: { id: permit.PERMITNUMBER } }"
            tag="tr"
            style="cursor:pointer;"
          >
            <td>{{ permit.PERMITNUMBER }}</td>
            <td>{{ permit.APPLICATIONTYPE }}</td>
            <td>{{ permit.ADDRESS }}</td>
            <td>{{ permit.STATUS }}</td>
            <td>{{ permit.ISSUEDATE }}</td>
          </router-link>
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
      message: false,
      permits: [],
      whereClause: encodeURI("where=1=1"),
      // The query seems to run signicantly slower without including these
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
      // Update the resultOffset of the query based on the length of permits
      const queryParams = Object.assign({}, this.defaultQueryParams);
      queryParams.resultOffset = this.permits.length;
      return queryParams;
    },
    queryUrl() {
      let url = BASE_REST_SERVICE_URL + this.whereClause;

      // Build the queryUrl from the queryParams
      for (let key in this.queryParams) {
        const queryParam =
          encodeURI("&") +
          encodeURI(key) +
          encodeURI("=") +
          encodeURI(this.queryParams[key]);
        url += queryParam;
      }
      return url;
    },
    permitCount() {
      return this.permits.length;
    }
  },
  methods: {
    async fetchPermits() {
      this.loading = true;
      try {
        const response = await axios.get(this.queryUrl);
        const newPermits = response.data.features.map(permit => {
          permit.attributes.ISSUEDATE = moment(permit.attributes.ISSUEDATE)
            // Format the date to be human readable
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
      this.fetchPermits().then(() => {
        this.allowLoadMore = false;
        this.message = true;
      });
    },
    permitNumberSearch(permitNumber) {
      this.whereClause =
        encodeURI("where=permitnumber='") +
        encodeURI(permitNumber) +
        encodeURI("'");
      this.permits = [];
      this.fetchPermits().then(() => {
        this.allowLoadMore = false;
        this.message = true;
      });
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

.service-update {
  margin-top: 0;
  margin-bottom: 0;
}

.message {
  margin-left: 33.33%;
}

.table {
  margin-top: 0;
}
</style>



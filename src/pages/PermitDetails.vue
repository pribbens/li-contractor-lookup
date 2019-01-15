<template>
  <div class="row vertical-center">
    <h3 v-show="loading" class="text-center">Loading please wait...</h3>
    <div v-show="!loading" class="columns ui-mobile viewport ui-overlay-a">
      <div id="details" class="ui page page-theme-a ui-page active">
        <div class="row-titles">
          <h2>PERMIT DETAILS</h2>
        </div>
        <div class="row">
          <div class="medium-12 columns">
            <dl title="PERMIT DETAILS">
              <dt>Permit Number</dt>
              <dd>{{ permit.PERMITNUMBER}}</dd>
              <dt>Application Type</dt>
              <dd>{{ permit.APPLICATIONTYPE }}</dd>
              <dt>Permit Type</dt>
              <dd>{{ permit.PERMITTYPE }}</dd>
              <dt>Date Issued</dt>
              <dd>{{ permit.ISSUEDATE }}</dd>
            </dl>
          </div>
          <div class="medium-12 columns">
            <dl title="PERMIT DETAILS">
              <dt>Work Description</dt>
              <dd>{{ permit.WORKDESCRIPTION }}</dd>
              <dt>Status</dt>
              <dd>{{ permit.STATUS }}</dd>
              <dt>Contractor</dt>
              <dd>{{ permit.CONTRACTORNAME }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { DATE_FORMAT, BASE_REST_SERVICE_URL } from "../utils";

export default {
  data() {
    return {
      loading: false,
      permit: {},
      // The query seems to run signicantly slower without including these
      queryParams: {
        outFields: "*",
        resultRecordCount: 1,
        sqlFormat: "none",
        f: "pjson"
      }
    };
  },
  computed: {
    permitnumber() {
      return this.$route.params.id;
    },
    queryUrl() {
      let url =
        BASE_REST_SERVICE_URL +
        encodeURI("where=permitnumber = ") +
        encodeURI("'") +
        encodeURI(this.permitnumber) +
        encodeURI("'");
      // Build the queryUrl from the queryParams
      for (let key in this.queryParams) {
        const queryParam = "&" + key + "=" + this.queryParams[key];
        url += queryParam;
      }
      return url;
    }
  },
  methods: {
    async fetchPermit() {
      this.loading = true;
      const response = await axios.get(this.queryUrl);
      const permit = response.data.features[0];
      permit.attributes.ISSUEDATE = moment(permit.attributes.ISSUEDATE)
        // Format the date to be human readable
        .utc()
        .format(DATE_FORMAT);
      this.permit = permit.attributes;
      this.loading = false;
    }
  },
  beforeMount() {
    this.fetchPermit();
  }
};
</script>

<style scoped>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 30%;
  transform: translate(0, -30%);
}

.row-titles {
  background-color: #f0f0f0;
  padding: 0.3em 1.3em;
  font-size: 1.78571rem;
  font-weight: bolder;
}

.row-titles h2 {
  margin: 0;
  color: #545151;
  padding: 1rem 1.5rem;
  font-weight: 600;
  letter-spacing: 0;
}

.ui-overlay-a,
.ui-page-theme-a,
.ui-page-theme-a .ui-panel-wrapper {
  background: #fff;
}

.ui-mobile,
.ui-mobile .ui-page {
  position: relative;
  background: none;
  color: #333;
  min-height: auto !important;
}

#details dt {
  background: none;
  margin: 1em 0 0;
  font-weight: bold;
  color: #444;
  font-size: 1.1em;
}

dl {
  margin: 0 1.5rem;
}

dl dd {
  margin: 0;
}
</style>



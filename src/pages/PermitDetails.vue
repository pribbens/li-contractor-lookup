<template>
  <div class="container">
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
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    permit() {
      return this.$route.params.permit;
    }
  }
};
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="columns medium-12">
        <div class="bg-medium pam">
          <label for="input-contractor">Contractor Name</label>
          <input v-model="contractor" id="input-contractor" name="input-contractor" type="text">
        </div>
      </div>
      <div class="columns medium-12">
        <div class="bg-medium pam">
          <label for="input-permit">Permit Number</label>
          <input v-model="permitNumber" id="input-permit" name="input-permit" type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  data() {
    return {
      permitNumber: "",
      contractor: "",
      startDate: "",
      endDate: ""
    };
  }
};
</script>

<style scoped>
</style>


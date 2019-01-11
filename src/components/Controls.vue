<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="columns medium-12">
          <div class="bg-medium pam">
            <label for="input-contractor">Contractor Name</label>
            <div class="search">
              <input
                v-model="contractor"
                id="input-contractor"
                name="input-contractor"
                type="text"
                placeholder="Ben Franklin"
                class="search-field"
              >
              <input type="submit" value="submit" class="search-submit">
            </div>
          </div>
        </div>
        <div class="columns medium-12">
          <div class="bg-medium pam">
            <label for="input-permit">Permit Number</label>
            <div class="search">
              <input
                v-model="permitNumber"
                id="input-permit"
                name="input-permit"
                type="text"
                placeholder="100000"
                class="search-field"
              >
              <input type="submit" value="submit" class="search-submit">
            </div>
          </div>
        </div>
      </form>
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


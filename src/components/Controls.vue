<template>
  <div>
    <div class="container">
      <div class="row">
        <form @submit.prevent>
          <div class="columns medium-12">
            <div class="bg-medium pam">
              <label for="input-contractor">Contractor Name</label>
              <div class="search">
                <input
                  v-model="contractor"
                  @keydown.enter="submitContractorSearch"
                  id="input-contractor"
                  name="input-contractor"
                  type="text"
                  placeholder="Canduit Electric"
                  class="search-field"
                >
                <input
                  @click="submitContractorSearch"
                  type="submit"
                  value="submit"
                  class="search-submit"
                >
              </div>
            </div>
          </div>
          <div class="columns medium-12">
            <div class="bg-medium pam">
              <label for="input-permit">Permit Number</label>
              <div class="search">
                <input
                  v-model="permitNumber"
                  @keydown.enter="submitPermitNumberSearch"
                  id="input-permit"
                  name="input-permit"
                  type="text"
                  placeholder="100000"
                  class="search-field"
                >
                <input
                  @click="submitPermitNumberSearch"
                  type="submit"
                  value="submit"
                  class="search-submit"
                >
              </div>
            </div>
          </div>
        </form>
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
      contractor: ""
    };
  },
  methods: {
    cleanText(str) {
      return str.trim().toUpperCase();
    },
    submitContractorSearch() {
      this.$emit("contractorSearch", this.cleanText(this.contractor));
      this.contractor = "";
    },
    submitPermitNumberSearch() {
      this.$emit("permitNumberSearch", this.cleanText(this.permitNumber));
      this.permitNumber = "";
    }
  }
};
</script>

<style scoped>
</style>


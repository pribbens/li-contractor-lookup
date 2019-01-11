<template>
  <div class="container">
    <table v-if="permit" role="grid" class="table text-center">
      <tbody>
        <tr>
          <th scope="col">Permit Number</th>
          <th scope="col">Permit Type</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
          <th scope="col">Issue Date</th>
        </tr>
        <tr>
          <td>{{ permit.PERMITNUMBER }}</td>
          <td>{{ permit.PERMITTYPE }}</td>
          <td>{{ permit.ADDRESS }}</td>
          <td>{{ permit.STATUS }}</td>
          <td>{{ permit.ISSUEDATE }}</td>
        </tr>
      </tbody>
    </table>
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


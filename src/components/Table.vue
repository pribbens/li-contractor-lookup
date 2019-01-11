<template>
  <div class="container">
    <table role="grid" class="table stack text-center">
      <tbody>
        <tr>
          <th scope="col">Permit Number</th>
          <th scope="col">Permit Type</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
          <th scope="col">Issue Date</th>
          <th scope="col">Permit Description</th>
        </tr>
        <tr v-for="permit in permits" :key="permit.id">
          <td>{{ permit.PERMITNUMBER }}</td>
          <td>{{ permit.PERMITTYPE }}</td>
          <td>{{ permit.ADDRESS }}</td>
          <td>{{ permit.STATUS }}</td>
          <td>{{ permit.ISSUEDATE }}</td>
          <td>
            <a :href="permit.PERMITNUMBER">Link</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["permits"]
};
</script>


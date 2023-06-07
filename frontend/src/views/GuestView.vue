<template>
  <div class="container-guest-view">
    <input placeholder="Search book..." class="input-search" type="text" />
    <table class="table-book-list">
      <tr>
        <th>Book title</th>
        <th>Book author</th>
        <th>Availability</th>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>2 left</td>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>2 left</td>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>Out of stock</td>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>2 left</td>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>Out of stock</td>
      </tr>
      <tr>
        <td>Lorem, ipsum.</td>
        <td>Lorem, ipsum.</td>
        <td>2 left</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuestView",
});
</script>

<style scoped>
.container-guest-view {
  margin: 0 4em;
}

.input-search {
  font-size: 18px;
  padding: 1em 1em 0.75em 1em;
  margin: 0 0 0.5em 2em;
  border-radius: 8px;
  border: 1px solid black;
  width: 27%;
}

table {
  width: 100%;
}

th {
  font-size: 26px;
  text-align: center;
  padding: 1em;
  background: grey;
  color: #fff;
}

td {
  font-size: 22px;
  text-align: center;
  padding: 1em;
  background: rgb(188, 185, 185);
}
</style>

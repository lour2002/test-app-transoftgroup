<script setup lang="ts">
import type {IUser} from "~/type/user";
import { UserTableRow } from "#components";

type Props = {
  list: IUser[];
};
const props = defineProps<Props>();
</script>

<template>
<table class="user-list">
  <thead>
    <tr>
      <th class="user-list__header-item">Name</th>
      <th class="user-list__header-item">Email</th>
      <th class="user-list__header-item">Phone</th>
    </tr>
  </thead>
  <tbody>
  <template v-for="user in props.list" :key="user.id">
    <UserTableRow
      :user-id="user.id"
      :name="user.name"
      :email="user.email"
      :phone="user.phone"
    />
  </template>
  </tbody>
</table>
</template>

<style scoped lang="scss">
.user-list {
  width: 100%;
  border-collapse: collapse;

  &__header-item {
    font-weight: bold;
    text-align: left;
    padding: 0.5rem;
  }
}
</style>

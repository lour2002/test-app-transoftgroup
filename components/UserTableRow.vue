<script setup lang="ts">
import type {IUser} from "~/type/user";

type Props = {
  name: IUser['name'];
  email: IUser['email'];
  phone: IUser['phone'];
  userId: IUser['id'];
};

const props = defineProps<Props>();
</script>

<template>
  <tr class="">
    <td class="user-list__cell">
      <NuxtLink :to="`/users/${props.userId}/todo`">
      {{ props.name }}
      </NuxtLink>
    </td>
    <td class="user-list__cell">{{ props.email }}</td>
    <td class="user-list__cell">{{ props.phone }}</td>
  </tr>
</template>

<style lang="scss" scoped>
.user-list__cell {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
</style>

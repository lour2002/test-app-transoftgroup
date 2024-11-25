<script setup lang="ts">
import {useUsersStore} from "~/store/users";

const usersStore = useUsersStore();

const { users } = storeToRefs(usersStore);
</script>

<template>
<h1>Users</h1>
  {{ users }}
</template>

<style scoped>

</style>

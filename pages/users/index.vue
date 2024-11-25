<script setup lang="ts">
import {useUsersStore} from "~/store/users";

const usersStore = useUsersStore();

const { users, page } = storeToRefs(usersStore);
</script>

<template>
<h1>Users</h1>
<UserTableList :list="users" />
<UserTablePagination v-model="page"/>
</template>

<style scoped>

</style>

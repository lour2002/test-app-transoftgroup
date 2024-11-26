<script setup lang="ts">
import {useUsersStore} from "~/store/users";

const router = useRouter();
const route = useRoute();
const usersStore = useUsersStore();

const { users, page } = storeToRefs(usersStore);

const handlerPageChange = (newPage: number) => {
  router.push({ query: { ...route.query, page: newPage } })
  page.value = newPage;
}

onMounted(() => {
  window.addEventListener('popstate', (event: PopStateEvent) => {
    const queryParams = new URLSearchParams(location.search);
    page.value = queryParams.get('page') ? parseInt(queryParams.get('page') as string) : 1;
  });
})

onUnmounted(() => {
  window.removeEventListener('popstate', () => {});
})
</script>

<template>
<h1>Users</h1>
<UserTableList :list="users" />
<UserTablePagination :model-value="page" @update:model-value="handlerPageChange"/>
</template>

<style scoped>

</style>

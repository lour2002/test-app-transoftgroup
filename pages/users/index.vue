<script setup lang="ts">
import {useUsersStore} from "~/store/users";
import getPageFromURL from "~/utils/getPageFromURL";

definePageMeta({
  middleware: ['extract-page'],
})

const router = useRouter();
const route = useRoute();
const usersStore = useUsersStore();

const { users, page, loading } = storeToRefs(usersStore);

const handlerPageChange = (newPage: number) => {
  router.push({ query: { ...route.query, page: newPage } })
  page.value = newPage;
}

const handleGetPageFromURL = (event: PopStateEvent) => {
  page.value = getPageFromURL();
}

onMounted(() => {
  window.addEventListener('popstate', handleGetPageFromURL);
})

onUnmounted(() => {
  window.removeEventListener('popstate', handleGetPageFromURL);
})
</script>

<template>
<h1>Users</h1>
  <template v-if="loading">
      Loading ...
  </template>
  <template v-else>
    <UserTableList :list="users" />
    <UserTablePagination :model-value="page" @update:model-value="handlerPageChange"/>
  </template>
</template>

<style scoped>

</style>

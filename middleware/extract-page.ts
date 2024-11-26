import {useUsersStore} from "~/store/users";

export default defineNuxtRouteMiddleware((to) => {
  const { page } = storeToRefs(useUsersStore());
  page.value = to.query.page ? parseInt(to.query.page as string) : 1;
})

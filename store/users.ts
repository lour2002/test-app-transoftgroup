import {useAsyncData} from "#app";
import type {IUser} from "~/type/user";

export const useUsersStore = defineStore('users', () => {
  const limit = ref(5)
  const page = ref(1)

  const { data: users, execute: fetchUsers, status } = useAsyncData(
    'users',
    () => $fetch(`https://jsonplaceholder.typicode.com/users`, { query: {
      _limit: limit.value,
      _page: page.value
    }}),
    {
      deep: false,
      default: () => [],
      transform: (data): IUser[] => {
        return data.map((user: any): IUser => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone
        }))
      },
      watch: [page]
    }
  )

  const loading = computed(() => status.value === 'pending')

  return {
    users,
    page,
    prevPage,
    loading,
    fetchUsers,
  }
})

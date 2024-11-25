import {useAsyncData} from "#app";

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
      transform: (data) => {
        console.log(data)
        return data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }))
      },
      watch: [page]
    }
  )

  return {
    users,
    page,
    status,
    fetchUsers,
  }
})

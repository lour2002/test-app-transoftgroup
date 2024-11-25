import type {IToDoTask} from "~/type/todo";

export const useToDoStore = defineStore('todo', () => {
  const userId = ref<number | null>(null)

  const setUserId = (id: number) => {
    userId.value = id
  }

  const { data: todoList, execute: fetchTodoList, status } = useAsyncData(
    'todos',
    () => $fetch(`https://jsonplaceholder.typicode.com/todos`, { query: {
      userId: userId.value,
    }}),
    {
      deep: false,
      immediate: false,
      default: () => [],
      transform: (data): IToDoTask[] => {
        return data.map((todo: any): IToDoTask => ({
          id: todo.id,
          userId: todo.userId,
          title: todo.title,
          completed: todo.completed
        }))
      },
      watch: [userId]
    }
  )

  const loading = computed(() => status.value === 'pending')

  return {
    todoList,
    loading,
    setUserId,
    fetchTodoList,
  }
});

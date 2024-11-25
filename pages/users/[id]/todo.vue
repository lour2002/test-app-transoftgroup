<script setup lang="ts">
import {useToDoStore} from "~/store/todo";

const {params} = useRoute()
const todoStore = useToDoStore()
const { todoList, loading } = storeToRefs(todoStore)

onBeforeMount(() => {
  const _id = parseInt(params.id as string)

  if (!isNaN(_id)) {
    todoStore.setUserId(_id)
  }
})
</script>

<template>
  <NuxtLink to="/users">User List</NuxtLink>
  <h1>TODO | # {{params.id}}</h1>
  <ToDoList :list="todoList" :loading="loading" />
</template>

<style scoped>

</style>

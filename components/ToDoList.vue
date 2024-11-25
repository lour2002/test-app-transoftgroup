<script setup lang="ts">
import type {IToDoTask} from "~/type/todo";

type Props = {
  list: IToDoTask[];
  loading: boolean;
};
const props = defineProps<Props>();
</script>

<template>
  <div v-if="props.loading"></div>
  <ul v-else class="todo__list">
    <template v-for="item in props.list" :key="item.id">
      <ToDoItem  :title="item.title" :completed="item.completed" />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.todo__list {
  padding: 1rem;
  margin-left: 1rem;
}
</style>

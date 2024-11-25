<script setup lang="ts">
import type {IToDoTask} from "~/type/todo";

type Props = {
  title: IToDoTask['title'];
  completed: IToDoTask['completed'];
};

const props = defineProps<Props>();
const classes = computed(() => {
  return {
    'todo__item': true,
    'todo__item--completed': props.completed
  }
});
</script>

<template>
  <li :class="classes">{{ props.title }}</li>
</template>

<style scoped lang="scss">
.todo {
  &__item {
    padding: 0.5rem;
    font-style: italic;
    list-style: circle;

    &--completed {
      text-decoration: line-through;
      list-style: disc;
    }
  }
}
</style>

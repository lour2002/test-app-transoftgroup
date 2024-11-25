<script setup lang="ts">
const page = defineModel<number>()
</script>

<template>
  <div class="user-list__pagination">
    <button class="pagination-item" :class="{ 'pagination-item--active': page == 1 }" @click="page = 1">1</button>
    <button class="pagination-item" :class="{ 'pagination-item--active': page == 2 }" @click="page = 2">2</button>
    <button class="pagination-item" :class="{ 'pagination-item--active': page == 3 }" @click="page = 3">3</button>
    <button class="pagination-item" :class="{ 'pagination-item--active': page == 4 }" @click="page = 4">4</button>
  </div>
</template>

<style scoped lang="scss">
.user-list{
  &__pagination {
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
  }
}
.pagination-item {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0;
  cursor: pointer;
  &--active {
    background-color: #ccc;
  }
}
</style>

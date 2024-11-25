<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__logo">LOGO</div>
    <nav>
      <NuxtLink to="/users">
        User list
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    background-color: #DDD;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & > :not(:last-child) {
      margin-right: 1rem;
    }

    &__logo {
      color: black;
      font-size: 2rem;
      font-weight: bold;
    }
  }
</style>

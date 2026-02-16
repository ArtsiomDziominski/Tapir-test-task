<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li v-for="item in items" :key="item.label" class="header-nav__item">
        <a href="#" class="header-nav__link">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  label: string
}

defineProps<{
  items: NavItem[]
}>()
</script>

<style scoped lang="scss">
.header-nav {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin: 0 auto;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    display: none;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0;
  }

  &__link {
    font-family: 'Golos Text', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    vertical-align: bottom;
    color: #000;
    text-decoration: none;
    transition: color 0.2s ease;
    white-space: nowrap;

    &:hover {
      color: #e30000;
    }
  }
}
</style>

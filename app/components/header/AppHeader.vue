<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <HeaderNav :items="navItems" />
      <HeaderBurger :items="navItems" />
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Мужчинам' },
  { label: 'Женщинам' },
  { label: 'Каталог' },
  { label: 'Доставка' },
  { label: 'Блог' },
  { label: 'О нас' },
]
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #fff;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 60px;

    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
}
</style>

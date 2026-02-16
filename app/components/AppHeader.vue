<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo" aria-label="На главную">
        <span class="header__logo-icon" />
      </NuxtLink>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="item in navItems" :key="item.label" class="header__nav-item">
            <a href="#" class="header__nav-link">{{ item.label }}</a>
          </li>
        </ul>
      </nav>

      <button class="header__burger" type="button" aria-label="Меню">
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </button>
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

  &__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;

    &-icon {
      display: block;
      width: 32px;
      height: 32px;
      background-color: #e30000;

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    margin: 0 auto;
    background-color: #f5f5f5;

    @media (max-width: 768px) {
      display: none;
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &-item {
      margin: 0;
    }

    &-link {
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

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    background: #F5F5F5;

    @media (max-width: 768px) {
      display: flex;
    }

    &-line {
      display: block;
      width: 17px;
      height: 2px;
      background-color: black;
      border-radius: 1px;
    }
  }
}
</style>

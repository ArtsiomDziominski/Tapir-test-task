<script setup lang="ts">
useSeoMeta({
  title: 'Tapir — интернет-магазин кроссовок',
  description: 'Каталог кроссовок Nike, Adidas, Puma, New Balance и других брендов. Доставка по всей России.',
  ogTitle: 'Tapir — интернет-магазин кроссовок',
  ogDescription: 'Каталог кроссовок Nike, Adidas, Puma, New Balance и других брендов.',
})
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <h1 class="hero__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
      <NuxtLink to="/catalog" class="hero__button">В каталог</NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 78px);
  padding: 0 60px;

  @media (max-width: 768px) {
    min-height: calc(100vh - 48px);
    padding: 0 20px;
  }

  &__container {
    width: 100%;
    margin: 0 auto;
  }

  &__title {
    font-family: 'Golos Text', sans-serif;
    font-size: 64px;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0;
    vertical-align: bottom;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  &__button {
    display: inline-block;
    padding: 12px 24px;
    font-family: 'Golos Text', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    vertical-align: bottom;
    color: #fff;
    background-color: #e30000;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #c00;
    }
  }
}
</style>

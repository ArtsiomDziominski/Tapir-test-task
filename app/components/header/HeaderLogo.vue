<template>
  <NuxtLink to="/public" class="header-logo" aria-label="На главную">
    <span class="header-logo__icon" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.header-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  &__icon {
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
</style>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  &__main {
    flex: 1;
  }
}
</style>

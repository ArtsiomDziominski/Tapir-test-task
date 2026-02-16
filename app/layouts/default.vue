<template>
  <div class="layout">
    <div class="layout__inner">
      <HeaderAppHeader />
      <main class="layout__main">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__inner {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }

  &__main {
    flex: 1;
  }
}
</style>

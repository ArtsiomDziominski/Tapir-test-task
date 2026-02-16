<template>
  <button class="header-burger" type="button" aria-label="Меню">
    <span class="header-burger__line" />
    <span class="header-burger__line" />
    <span class="header-burger__line" />
  </button>
</template>

<style scoped lang="scss">
.header-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: #f5f5f5;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  &__line {
    display: block;
    width: 17px;
    height: 2px;
    background-color: black;
    border-radius: 1px;
  }
}
</style>

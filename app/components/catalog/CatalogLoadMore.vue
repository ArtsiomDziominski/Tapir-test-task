<template>
  <div class="catalog-load-more">
    <button
      v-if="!loading && !error"
      class="catalog-load-more__button"
      type="button"
      @click="$emit('load')"
    >
      Показать ещё
    </button>

    <p v-if="loading" class="catalog-load-more__loading">Загрузка...</p>

    <div v-if="error && !loading" class="catalog-load-more__error">
      <p class="catalog-load-more__error-text">Произошла ошибка, попробуйте позже</p>
      <button
        class="catalog-load-more__button"
        type="button"
        @click="$emit('retry')"
      >
        Повторить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
  error: boolean
}>()

defineEmits<{
  load: []
  retry: []
}>()
</script>

<style scoped lang="scss">
.catalog-load-more {
  display: flex;
  justify-content: center;
  padding: 0 0 100px 0;

  &__button {
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #000;
    background: none;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  &__loading {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #888;
  }

  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &-text {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #888;
    }
  }
}
</style>

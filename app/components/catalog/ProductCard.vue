<template>
  <a href="#" class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <button
        type="button"
        class="product-card__favorite"
        aria-label="Добавить в избранное"
        @click.prevent
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      </button>
    </div>

    <div class="product-card__info">
      <div class="product-card__prices">
        <span class="product-card__price">{{ formattedPrice }} ₽</span>
        <span class="product-card__price-half">{{ formattedHalfPrice }} ₽ × 2</span>
      </div>
      <p class="product-card__name">{{ product.name }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const formattedPrice = computed(() =>
  props.product.price.toLocaleString('ru-RU'),
)

const formattedHalfPrice = computed(() =>
  Math.ceil(props.product.price / 2).toLocaleString('ru-RU'),
)
</script>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  &__image-wrapper {
    width: 290px;
    height: 180px;
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    margin-bottom: 12px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }

  &__favorite {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
    color: #000;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #e30000;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__price {
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0;
    vertical-align: middle;

    &-half {
      font-size: 14px;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.05em;
      vertical-align: bottom;
      color: #fff;
      background-color: black;
      padding: 4px;
      white-space: nowrap;
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0;
    vertical-align: bottom;
    color: #888;
  }
}
</style>

<template>
  <div class="catalog-grid">
    <CatalogProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  products: Product[]
}>()
</script>

<style scoped lang="scss">
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 110px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }
}
</style>

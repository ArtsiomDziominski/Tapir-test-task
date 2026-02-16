<template>
  <section class="catalog">
    <h1 class="catalog__title">КАТАЛОГ</h1>

    <CatalogGrid :products="products" />

    <CatalogLoadMore
      v-if="hasMore || loadingMore || errorMore"
      :loading="loadingMore"
      :error="errorMore"
      @load="loadMore"
      @retry="loadMore"
    />
  </section>
</template>

<script setup lang="ts">
import type { Product, ProductsResponse } from '~/types/product'

useSeoMeta({
  title: 'Каталог — Tapir',
  description: 'Каталог кроссовок: Nike, Adidas, Puma, New Balance и другие бренды.',
  ogTitle: 'Каталог — Tapir',
  ogDescription: 'Каталог кроссовок: Nike, Adidas, Puma, New Balance и другие бренды.',
})

const { apiBase } = useRuntimeConfig().public
const API_URL = `${apiBase}/products`

const products = ref<Product[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const loadingMore = ref(false)
const errorMore = ref(false)

const hasMore = computed(() => currentPage.value < totalPages.value)

const { data } = await useAsyncData('products', () =>
  $fetch<ProductsResponse>(API_URL, {
    query: { page: 1 },
  }),
)

if (data.value) {
  products.value = data.value.products
  totalPages.value = data.value.totalPages
  currentPage.value = data.value.currentPage
}

async function loadMore() {
  loadingMore.value = true
  errorMore.value = false

  try {
    const nextPage = currentPage.value + 1
    const response = await $fetch<ProductsResponse>(API_URL, {
      query: { page: nextPage },
    })

    products.value.push(...response.products)
    currentPage.value = response.currentPage
    totalPages.value = response.totalPages
  }
  catch {
    errorMore.value = true
  }
  finally {
    loadingMore.value = false
  }
}
</script>

<style scoped lang="scss">
.catalog {
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 24px 16px 0;
  }

  &__title {
    font-size: 42px;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0;
    vertical-align: bottom;
    text-transform: uppercase;
    text-align: center;
    margin: 100px 0 110px 0;

    @media (max-width: 768px) {
      font-size: 26px;
      margin-bottom: 24px;
    }
  }
}
</style>

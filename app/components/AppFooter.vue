<template>
  <footer class="footer">
    <div class="footer__container">
      <div v-for="section in sections" :key="section.title" class="footer__section">
        <h3 class="footer__title">{{ section.title }}</h3>
        <ul class="footer__list">
          <li v-for="link in section.links" :key="link" class="footer__item">
            <a href="#" class="footer__link">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterSection {
  title: string
  links: string[]
}

const sections: FooterSection[] = [
  {
    title: 'Каталог',
    links: ['Все бренды', 'Nike', 'Adidas', 'Puma', 'New Balance'],
  },
  {
    title: 'Помощь',
    links: ['Доставка', 'Заказ и оплата', 'Обмен и Возврат', 'F. A. Q.'],
  },
  {
    title: 'Информация',
    links: ['Преимущества', 'Гарантия и безопасность', 'Индивидуальный заказ', 'Акции'],
  },
  {
    title: 'Компания',
    links: ['О нас', 'Блог', 'Отзывы', 'Контакты'],
  },
]
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    max-width: 1440px;
    margin: 100px auto;
    padding: 0 60px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0;
    vertical-align: bottom;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0;
  }

  &__link {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0;
    vertical-align: bottom;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>

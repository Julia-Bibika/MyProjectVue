<template>
  <div>
    <h1>Наші продукти</h1>
    <product-card
      v-if="receivedProductId"
      :img-src="currentProduct.imgSrc"
      :title="currentProduct.title"
      :price="currentProduct.price"
      :sales="currentProduct.sales"
    />
    <product-list v-else :product-list-data="listData" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ProductCard from '@/components/ProductList/ProductCard'
export default {
  name: 'MyProducts',

  components: {
    ProductList,
    ProductCard,
  },

  computed: {
    receivedProductId() {
      return this.$route.params.id
    },
    currentProduct() {
      return this.receivedProductId
        ? this.listData.find((item) => item.id == this.receivedProductId)
        : {}
    },
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            'https://s.ek.ua/jpg_zoom1/1652336.jpg',
          title: 'Xiaomi Redmi 10',
          price: 5000,
          sales: true,
        },
        {
          id: 2,
          imgSrc:
            'https://content2.rozetka.com.ua/goods/images/big/278089722.jpg',
          title: 'Ноутбук ASUS VivoBook 17 X712EA-BX817',
          price: 20000,
          sales: false,
        },
        {
          id: 3,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/big/253826353.jpg',
          title: 'Ноутбук Prestigio SmartBook 141 С7',
          price: 9000,
          sales: true,
        },
        {
          id: 4,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 1000,
          sales: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
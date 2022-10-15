<template>
  <div>
    <div>Корзина: {{ addedProductsNumber }}</div>
    <div>Кількість кліків: {{ clickNum }}</div>
    <div>Total: {{ totalSum }}</div>
    <div class="list-container">
      <product-card
        v-for="item in productListData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :price="item.price"
        :sales="item.sales"
        @on-add-to-cart="onAdd"
        @mouse-down-container="clickNum++"
        @open-product-detail="onProductDetail(item.id)"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',

  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      addedProductsNumber: 0,
      clickNum: 0,
      totalSum: 0,
    }
  },

  methods: {
    onAdd(priceValue) {
      this.totalSum += priceValue
    },
    onProductDetail(itemId) {
      this.$router.push({
        name: 'products',
        params: { id: itemId },
      })
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>

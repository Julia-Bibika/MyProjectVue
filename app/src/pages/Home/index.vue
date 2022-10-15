<template>
  <div>
    <my-masterpage>
      <template v-slot:my-header></template>
    
    <h1>HOME</h1>
    </my-masterpage>
  </div>
</template>

<script>
import MyMasterpage from '@/masterpages/MyMasterpage.vue'

export default {
  name: 'MyHome',
   components: {
    MyMasterpage,
   },
}
</script>

<style lang="scss" scoped></style>
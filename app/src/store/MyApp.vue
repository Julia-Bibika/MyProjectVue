<template>
    <div>
        {{getCount}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:"MyApp",
        components:{},
        computed:{
            ...mapGetters(['getCount'])
        }
    }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
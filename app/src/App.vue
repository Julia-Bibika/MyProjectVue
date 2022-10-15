<template>
  <div class="wrapper">
    <header class="header">
      <div class="logotype">logotype</div>
      
    <p class="links">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/products-list">Products</router-link>
      <router-link class="link" to="/about">About</router-link>
    </p>
        <ul>
            <li><router-link class="link1" to="/sign-in">Sign In</router-link></li>
            <li><router-link class="link1" to="/sign-up">Sign Up</router-link></li>
        </ul>
    </header>
    <router-view></router-view>
    <a href='#' class="arrowUp">
      <i class="fa-solid fa-arrow-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},

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

<style lang="scss">
@import "./assets/styles";
h1{
  color: #000;
}
.links{
  position: relative;
  left: 63%;
  top:14px;
}
.link{
  color: black;
  padding: 6px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 50px;
  margin: 5px;
  text-decoration: none;
  transition: 0.3s;
}
.link:hover{
  color: rgb(90, 28, 28);
  font-size: 21px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom ,#D3CCE3,#E9E4F0);
  background-size: 1000% 1000%;
}
</style>

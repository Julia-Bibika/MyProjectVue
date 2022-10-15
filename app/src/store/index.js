import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            count: 0,
            listData: [
                {
                    id: 1,
                    imgSrc:'https://s.ek.ua/jpg_zoom1/1652336.jpg',
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
    getters:{
        getCount:(state) => {
            return state.count
        },
    },

    mutations:{
        increment(state){
            state.count++
        },
    },
})

export default store
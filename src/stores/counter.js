import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  
  

  const menu = ref([
    { name: 'เอสเปรสโซ (Espresso)', img: 'https://santipanich.com/wp-content/uploads/2021/05/closeup-classic-fresh-espresso-served-dark-surface.jpg', price: 150 },
    { name: 'อเมริกาโน (Americano) ', img: 'https://s359.kapook.com/pagebuilder/0cb9f8ae-ae94-4b37-b285-3e3660785fa9.jpg', price: 180 },
    { name: 'คาปูชิโน (Cappuccino) ', img: 'https://3.bp.blogspot.com/-aSrCRkfnutk/UALKUTCIogI/AAAAAAAAAlQ/d2khJ6PeKXc/s1600/coffee.jpg', price: 200 },
    { name: 'ลาเต้ (Latte) ', img: 'https://www.aromathailand.com/wp-content/uploads/2023/03/Mocha.jpg', price: 120 },
    { name: 'มอคค่า (Mocha) ', img: 'https://www.aromathailand.com/wp-content/uploads/2023/04/Cover-Mocha-1080x675.jpg', price: 190 },
    { name: 'กาแฟส้ม (Orange Coffee / Orange Americano) ', img: 'https://www.aromathailand.com/wp-content/uploads/2023/03/Orange-Coffee.jpg', price: 200 },
    { name: 'แฟลทไวท์ (Flat White)', img: 'https://doithaicoffee.com/wp-content/uploads/2022/06/Flat-White-with-Latte-Arts.jpg', price: 170 },
    { name: 'ชาเย็น / ชาไทย ', img: 'https://img.kapook.com/u/2022/wanwanat/1482144575.jpg', price: 100 },
    { name: 'มัทฉะลาเต้ (Matcha Latte) ', img: 'https://www.pholfoodmafia.com/wp-content/uploads/2019/03/Matcha-Frappe-big.jpg', price: 220 },
    { name: 'โกโก้ (cocoa) ', img: 'https://dwplusthailand.com/wp-content/uploads/2022/09/How-to-make-cocoa-e1662467586476.jpg', price: 250 },
    { name: 'ชาน้ำผึ้งมะนาว', img: 'https://www.bluemochatea.com/wp-content/uploads/2020/03/%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.jpg', price: 145 },
    { name: ' ชาพีช', img: 'https://www.bluemochatea.com/wp-content/uploads/2020/01/%E0%B8%9E%E0%B8%B5%E0%B8%8A1.jpg', price: 90 },



  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});

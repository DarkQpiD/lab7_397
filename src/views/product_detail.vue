<template>
    <div class="d-flex justify-content-center" v-if="!load_product">
      <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-3" v-else>
      <div class="col-md-6">
        <img :src="product.image" alt="" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <h4>ราคา {{ product.price }} บาท</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useProductStore } from '../store/product';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const product = ref({})
  const product_store = useProductStore();
  const load_product = ref(false); // เริ่มต้นเป็น false
  
  const product_detail = () => {
    const productName = route.params.name;
    const foundProduct = product_store.list_products.find(product => product.name === productName);
    if (foundProduct) {
      // หากพบข้อมูลของสินค้า ก็อัปเดตตัวแปร product
      product.value = foundProduct;
      load_product.value = true; // เมื่อโหลดข้อมูลเสร็จแล้วกำหนดให้ load_product เป็น true
    }
  };
  onMounted(() => {
    product_detail();
  });
  </script>
  
  
  
<style lang="scss" scoped>
  
</style>
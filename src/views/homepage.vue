<template>
    <div class="d-flex justify-content-center " v-if="!product_store.load_products">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-2" v-else>
        <div class="col mb-2" v-for="(product, index) in search_products" :key="index">
            <div class="card" style="width: 19rem;">
                <img :src="product.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">ราคา {{ product.price }} บาท</p>
                    <routerLink :to="`/product_detail/${product.name}`" class="btn btn-primary mx-2">รายละเอียด</routerLink>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { computed } from 'vue'
import { useProductStore } from '../store/product';
const product_store = useProductStore()
const list = computed(() => product_store.list_products )
const search_products = computed(() => product_store.search_products)

</script>
  
  
<style lang="scss" scoped>
  
</style>
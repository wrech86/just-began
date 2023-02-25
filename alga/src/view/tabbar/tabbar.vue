<template>
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="guide-o" to="home">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="chart-trending-o" to="table">数据</van-tabbar-item>
  <van-tabbar-item name="friends" icon="user-o" to="person">个人</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
const active = ref('home');
</script>

<style  scoped>

</style>
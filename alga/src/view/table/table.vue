<template>
<van-tabs v-model:active="active">
  <van-tab title="温度">
    <tem></tem>
  </van-tab>
  <van-tab title="湿度">
    <hum-vue></hum-vue>
  </van-tab>
  <van-tab title="PM2.5">
   <pmVue></pmVue>
  </van-tab>
   <van-tab title="CO₂">
   <co2-vue></co2-vue>
  </van-tab>
</van-tabs>

</template>

<script setup>
import { ref } from 'vue';
import humVue from './hum.vue';
import pmVue from './pm.vue';
import tem from './tem.vue';
import co2Vue from './co2.vue';
const active = ref(0);
</script>

<style  scoped>

</style>
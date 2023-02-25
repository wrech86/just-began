<template>
<div class="root">
 <router-view></router-view>
 <tabbarVue></tabbarVue>
</div>
 
</template>

<script setup>
import tabbarVue from './tabbar.vue';
</script>

<style  scoped>
.root{
  font-family: PingFang;
}
</style>

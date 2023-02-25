<template>
  <router-view v-slot="{ Component, route }" class="routerview">
    <transition :name="route.meta.transition">
      <keep-alive >
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>

  <tabbarVue></tabbarVue>
</template>
<script setup>
import { ref , watch} from 'vue';
import {useRouter , useRoute} from "vue-router";
import tabbarVue from './view/tabbar/tabbar.vue';
const router = useRouter()
const route = useRoute()
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  const newI = to.meta.i
  const oldI = from.meta.i
  if(toDepth == fromDepth){
      to.meta.transition = oldI<newI ? 'slide-right' : 'slide-left'
  }else{
      to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
})

</script>
<style>

* {
  margin: 0;
  padding: 0;
  font-family: PingFang;
}
.routerview{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms ease-in;
  position: absolute;
}
.slide-left-enter-from,
.slide-left-leave-to,
.slide-right-enter-from,
.slide-right-leave-to
{
  opacity: 0;
}
.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from{
  opacity: 1;
}
.slide-right-enter-active{
   transform: translateX(0);
}
.slide-right-leave-active{
  transform: translateX(-100%);
}
.slide-left-enter-active{
   transform: translateX(0);
}
.slide-left-leave-active{
  transform: translateX(100%);
}
</style>

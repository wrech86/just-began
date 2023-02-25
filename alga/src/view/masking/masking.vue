<template>

<div class="masking">
</div>
<div class="text">
<h2>Encounter health</h2>
</div>


 
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
setTimeout(()=>{
  router.replace('/home')
},3000)
</script>

<style  scoped lang="scss">
.masking{
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/img/backimg.jpg');
  background-size: cover;
  position: relative;
}
.text {
    width: 100%;
    height: 50vh;
    position: relative;
    align-items: center;
    min-height: 50vh;
    background-color: rgba(255, 255, 255, 0);
    overflow: hidden;
    position: absolute;
    top: 0;
    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: rgba(82, 198, 181, 0.371);
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }

    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}

h2{
    position: relative;
    color: rgb(40, 38, 38);
    z-index: 10;
    text-align: center;
    height: 50vh;
    line-height: 80vh;
    font-size: 8vw;
    text-shadow: 3px 3px 2px #999;
}
</style>
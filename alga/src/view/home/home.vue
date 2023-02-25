<template>
  <first-vue></first-vue>
  <div class="box">
    <div class="circle"></div>
    <div class="text">
      <div class="pm">CO₂(ppm)</div>
      <div class="num"><span>412</span></div>
      <div class="air">空气优</div>
    </div>
  </div>
  <div class="box1">
    <div>
      <div class="tem">
        <span>25</span>
        <span>温度(℃)</span>
      </div>
      <div class="gang"></div>
      <div class="hum">
        <span>60</span>
        <span>湿度(%)</span>
      </div>
    </div>

  </div>
  <div class="box2">
    <button class="btn1">
      <img src="../../assets/img/开关.png" class="icon1">
      <span>开关</span>
    </button>
  </div>
  <div class="box3">
    <div>
      <div class="icon2">
        <div>
          <img src="../../assets/img/A.png" alt="">
        </div>
        <span>自动</span>
      </div>
      <div class="icon2">
        <div>
          <img src="../../assets/img/睡眠.png" alt="">
        </div>
        <span>睡眠</span>
      </div>
      <div class="icon2">
        <div>
          <img src="../../assets/img/儿童.png" alt="">
        </div>
        <span>儿童</span>
      </div>
      <div class="icon2">
        <div style="background-color:rgb(72, 247, 189)">
          <img src="../../assets/img/档位.png" alt="">
        </div>
        <span>档位</span>
      </div>
    </div>
  </div>
  <div class="box4">
  <div>--档位设置</div>
  <div>
      <div class="icon3">
      <img src="../../assets/img/1.png">
    </div>
    <div class="icon3" style="background-color:rgb(72, 247, 189)">
      <img src="../../assets/img/2.png">
    </div>
    <div class="icon3">
      <img src="../../assets/img/3.png">
    </div>
  </div>
  </div>
  <div class="box5">
   <div class="a">
     <div><img src="../../assets/img/负离子.png" class="icon4"></div>
     <div style="margin-left:-50%">负离子</div>
     <div><van-switch v-model="checked" size="24px" active-color="rgb(72, 247, 189)"/></div>
   </div>
   <div class="a">
     <div><img src="../../assets/img/滤芯.png" class="icon4"></div>
     <div>滤芯</div>
     <div><van-icon name="arrow" size='0.5rem' color='#777777'/></div>
   </div>
   <div class="a">
     <div><img src="../../assets/img/闹钟.png" class="icon4"></div>
     <div>定时</div>
     <div><van-icon name="arrow" size='0.5rem' color='#777777'/></div>
   </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import firstVue from './some/first.vue';
const checked = ref(true)
</script>

<style  scoped>
.box {
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 200px;
  height: 200px;
  background-color: rgba(127, 255, 212, 0.545);
  border-radius: 50%;
  box-shadow: 0 0 70px 0px rgb(127, 255, 212);
  filter: blur(5px);
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text>div {
  margin-top: 5px;
}

.pm {
  font-size: 15px;
}

.num {
  font-size: 70px;
  letter-spacing: 4px;
}

.air {
  font-size: 20px;
}

.box1 {
  width: 100%;
  height: 100px;
  position: absolute;
  top: 280px;
  display: flex;
  justify-content: center;
}

.box1>div {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tem,
.hum {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tem>span:nth-child(1),
.hum>span:nth-child(1) {
  font-size: 35px;
}

.tem>span:nth-child(2),
.hum>span:nth-child(2) {
  font-size: 15px;
}

.gang {
  height: 40px;
  border: 1px solid rgba(128, 128, 128, 0.518);
}

.box2 {
  width: 100%;
  position: absolute;
  top: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn1 {
  display: block;
  width: 98%;
  height: 70px;
  border-radius: 10px;
  text-decoration: none;
  margin: 0;
  border: 1px solid rgb(221, 220, 220);
  outline: none;
  background-color: rgba(255, 255, 255, 0.94);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.btn1>span{
  flex: 1;
  font-size:15px;
  margin-right: 70%;
}
.icon1{
  width: 50px;
  height: 50px;
}
.box3{
  position: absolute;
  top: 480px;
  width: 100%;
  height: 100px;
   display: flex;
  justify-content: center;
  align-items: center;
}
.box3>div{
  width: 97.5%;
  height: 100%;
  border: 1px solid rgb(221, 220, 220);
  outline: none;
  background-color: rgba(255, 255, 255, 0.94);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}
.icon2{
  width: 20%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 7px;
}
.icon2>div{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0 0 20px 0px rgba(202, 205, 205, 0.682);
  background-color: rgba(215, 219, 219, 0.532);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon2 img{
  width: 25px;
  height: 25px;
}
.icon2 span{
  font-size: 15px;
}
.box4{
  width: 100%;
  height: 120px;
  position: absolute;
  top: 590px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box4>div:nth-child(1){
  display: block;
  width: 100%;
  height: 60px;
  font-size: 17px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
}
.box4>div:nth-child(2){
  width: 97.5%;
  height: 100%;
  border: 1px solid rgb(221, 220, 220);
  outline: none;
  background-color: rgba(255, 255, 255, 0.94);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  
}
.icon3>img{
  width:30px;
  height: 30px;
}
.icon3{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 20px 0px rgba(202, 205, 205, 0.682);
  background-color: rgba(215, 219, 219, 0.532);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box5{
  width: 97.5%;
  height: auto;
  position: absolute;
  top: 720px;
  left: 0;
  right: 0;
  margin: auto;
  border: 1px solid rgb(221, 220, 220);
  outline: none;
  background-color: rgba(255, 255, 255, 0.94);
  border-radius: 10px;
  display: flex;
  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 50px;
  
}
.a{
  width: 100%;
  height: 70px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.a>div:nth-child(1){
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(72, 247, 189);
  display: flex;
  justify-content: center;
  align-items: center;
}
.a>div:nth-child(2){
  font-size:15px;
  margin-left: -64%;
}
.icon4{
  width: 30px;
  height: 30px;
}
</style>
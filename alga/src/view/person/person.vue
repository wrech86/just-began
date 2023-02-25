<template>
<div class="userF">
<div class="user">
    <div>
      <div class="icon">
        <van-icon name="setting-o" size="0.6rem" />
        <van-icon name="setting-o" size="0.6rem" />
      </div>
      <div class="info">
          <div class="picture">
            <van-icon name="contact" size="2rem" color="#7a7a7a" />
          </div>
      </div>
    </div>
    <div>
      <van-button
        round
        type="primary"
        color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
      >登录/注册</van-button>
    </div>
  </div>
</div>
  
  <van-cell-group class="cellGroup" border>
    <van-cell icon="exchange" title="空气质量检测" is-link  />
    <van-cell icon="todo-list-o" title="笔记本" is-link  />
    <van-cell icon="service-o" title="客服" is-link  />
    <van-cell icon="bullhorn-o" title="活动" is-link  />
  </van-cell-group>
  <van-button
    type="primary"
    class="btn"
    size="normal"
    color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
  >退出登录</van-button>
</template>

<script setup>

</script>

<style  scoped>
.userF{
  overflow: hidden;
}
.user {
  width: 375px;
  height: 225px;
  background-color: rgba(255, 255, 255, 0.321);
  margin: 15px auto;
  border: 1px solid rgba(207, 205, 205, 0.329);
  border-radius: 15px;
  transform: translateZ(25px);
  box-shadow: 0 -6px 10px -6px rgba(243, 242, 242, 0.35);
  background-size: cover;
  background-position: 50%;
}

.user > div:nth-child(1) {
  width: 100%;
  height: 175px;
  z-index: 999;
}
.icon {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
}
.icon > img {
  width: 24px;
  height: 24px;
}
.info {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
}
.picture {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid rgb(194, 190, 190);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px 0px rgba(39, 38, 38, 0.35);
}
.user > div:nth-child(2) {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.dengLu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhuCe {
  font-size: 30px;
  position: absolute;
  right: 40px;
}
.cellGroup {
  margin-top: 40px;
}
.btn {
  border-radius: 20px;
  display: block;
  margin: 50px auto;
}
</style>
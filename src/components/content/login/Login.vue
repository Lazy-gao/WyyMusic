<template>
  <div class="login">
    <img src="~assets/img/login/logo.jpg" />
    <div class="login-btn">
      <button class="login-phone" @click="toPhoneLogin">手机号登录</button>
      <button class="experience" @click="toFind">立即体验</button>
    </div>
    <div class="protocol">
      <van-checkbox v-model="checked" checked-color="#eee" icon-size="12px">同意</van-checkbox>
      <span>《服务条款》《隐私政策》《儿童隐私政策》</span>
    </div>
    <div class="login-mode">
      <div class="icon">
        <img src="~assets/img/login/wx.png" />
      </div>
      <div class="icon">
        <img src="~assets/img/login/qq.png" />
      </div>
      <div class="icon">
        <img src="~assets/img/login/wb.png" />
      </div>
      <div class="icon">
        <img src="~assets/img/login/wy.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'Login',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    toFind() {
      if (this.checked) {
        this.$router.replace('/find')
      } else {
        Toast({
          message: '请先勾选同意《服务条款》、《隐私政策》和《儿童隐私政策》',
          position: 'middle'
        })
      }
    },
    toPhoneLogin() {
      if (this.checked) {
        this.$router.push('/phoneLogin')
      } else {
        Toast({
          message: '请先勾选同意《服务条款》、《隐私政策》和《儿童隐私政策》',
          position: 'middle'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #db392c;

  img {
    position: absolute;
    bottom: 400px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .login-btn {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translate(-50%);
    width: 80%;

    .login-phone {
      height: 50px;
      width: 300px;
      border-radius: 30px;
      border: 1px solid #fff;
      font-size: 18px;
      color: #db392c;
      font-weight: 700;
      margin-bottom: 35px;
    }

    .experience {
      height: 50px;
      width: 300px;
      border-radius: 30px;
      background-color: #db392c;
      border: 1px solid #fff;
      font-size: 18px;
      color: #fff;
    }
  }

  .protocol {
    display: flex;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    font-size: 12px;
    color: #eee;

    .van-checkbox {
      width: 20%;
    }
  }

  .login-mode {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: center;

    .icon {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 20px;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>

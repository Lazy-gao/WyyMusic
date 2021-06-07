<script src="../../../store/index.js"></script>
<template>
  <div class="verification">
    <van-nav-bar title="手机号登录" left-arrow @click-left="onClickLeft">
      <template #right>
        <span class="password" @click="toPasswordLogin">密码登录</span>
      </template>
    </van-nav-bar>
    <div class="verification-title">
      <span class="title">请输入验证码</span>
      <div class="phone">
        <span>已发送至+86 {{ $store.state.phone }}</span>
        <van-button size="small" type="primary" plain round @click="sendCode">{{ text }}</van-button>
      </div>
      <!-- 验证码输入框 -->
      <van-password-input :value="verificationCode" :length="4" :gutter="10" :mask="false" :focused="showKeyboard" @focus="showKeyboard = true" :error-info="errorInfo" info="密码为 4 位数字" />
      <!-- 数字键盘 -->
      <van-number-keyboard v-model="verificationCode" :show="showKeyboard" @blur="showKeyboard = false" />
    </div>
  </div>
</template>

<script>
import { getVerifyCode, verifyCode } from 'network/login/login'
import { Toast } from 'vant'

export default {
  name: 'Verification',
  data() {
    return {
      text: '发送验证码',
      time: 30, // 倒计时时间
      verificationCode: '', // 验证码
      errorInfo: '', // 错误提示
      showKeyboard: true // 显示软键盘
    }
  },
  watch: {
    verificationCode(value) {
      if (value.length === 4) {
        // 校验验证码
        this.verifyCode(value)
      } else {
        this.errorInfo = ''
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 点击获取验证码
    async sendCode() {
      const res = await getVerifyCode(this.$store.state.phone)
      if (res.data === false) {
        Toast({
          message: '当前网络繁忙，请稍后再试！'
        })
        return
      }
      // 调用倒计时函数
      await this.timer()
    },
    // 倒计时方法
    async timer() {
      if (this.time > 0) {
        this.time--
        this.text = this.time + 'S'
        this.autoTimer = setTimeout(this.timer, 1000)
      } else {
        this.time = 30
        this.text = '重新发送'
        clearTimeout(this.autoTimer)
        const res = await getVerifyCode(this.$store.state.phone)
        if (res.data === false) {
          Toast({
            message: '当前网络繁忙，请稍后再试！'
          })
          return
        }
        await this.timer()
        return
      }
    },
    // 验证验证码
    async verifyCode(code) {
      const res = await verifyCode(this.$store.state.phone, code)
      console.log(res)
      if (res.data === false) {
        Toast({
          message: '验证码不正确',
          icon: 'close'
        })
      }
      this.$router.replace('/find')
    },
    // 跳转密码登录页面
    toPasswordLogin() {
      this.$router.push('/passwordLogin')
    }
  }
}
</script>

<style scoped lang="less">
.verification {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;

  .password {
    padding: 1px 12px;
    border: 1px solid #eee;
    border-radius: 20px;
    font-size: 12px;
  }

  .verification-title {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 20px;

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    .phone {
      margin-top: 10px;
      height: 40px;
      line-height: 40px;
      color: #9a9a9a;
      font-size: 16px;
      margin-bottom: 30px;

      .van-button {
        float: right;
        border: none;
      }
    }

    .van-password-input {
      .van-password-input__item {
        border-bottom: 1px solid #999;
      }
    }
  }
}
</style>

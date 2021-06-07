<template>
  <div class="password-login">
    <van-nav-bar title="账号密码登录" left-arrow @click-left="onClickLeft" />
    <div class="password">
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label-width="30" label="密码" placeholder="输入密码" clearable />
      <van-button round color="#dc2e1e" size="large" @click="handleLogin" :disabled="!password">立即登录</van-button>
      <div class="forgetpwd">
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import { phoneLogin } from 'network/login/login'
import { PASSWORD, TOKEN, COOKIE, USERNAME, USERId, AVATARURL } from 'store/types'

export default {
  name: 'PasswordLogin',
  data() {
    return {
      password: '930816.gwx'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    handleLogin() {
      this.login(this.password)
      this.$store.commit(PASSWORD, this.password)
      this.$router.replace('/find')
    },
    async login(pwd) {
      const res = await phoneLogin(this.$store.state.phone, pwd)
      console.log(res)
      this.$store.commit(TOKEN, res.token)
      this.$store.commit(COOKIE, res.cookie)
      this.$store.commit(USERNAME, res.profile.nickname)
      this.$store.commit(USERId, res.profile.userId)
      this.$store.commit(AVATARURL, res.profile.avatarUrl)
    }
  }
}
</script>

<style scoped lang="less">
.password-login {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;

  .password {
    padding: 50px 8px;

    .van-field {
      border-bottom: 1px solid #eee;
      margin-bottom: 60px;
    }

    .forgetpwd {
      padding-top: 20px;
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
}
</style>

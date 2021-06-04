<template>
  <div class="phone-login">
    <van-nav-bar title="手机号登录" left-arrow @click-left="onClickLeft" />
    <div class="phone-login-title">
      <span class="title">登录体验更多精彩</span>
      <span class="desc">未注册手机号登录后将自动创建账号</span>
      <div class="phone">
        <van-cell-group :border="false">
          <van-field v-model="phone" label="+86" placeholder="输入手机号" type="tel" autofocus clearable label-width="26" :border="false" @clear="clearInput"></van-field>
        </van-cell-group>
      </div>
      <van-button color="#dc2e1e" :disabled="!phone" round @click="toVerificationTo">下一步</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { USERPHONE } from '@/store/types'
import { verifyPhone } from 'network/login/login'

export default {
  name: 'PhoneLogin',
  data() {
    return {
      phone: '18294264002'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    clearInput() {
      this.phone = ''
    },
    async toVerificationTo() {
      if (this.phone) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
          Toast({
            message: '手机号应该是11位数字',
            icon: 'close'
          })
          return false
        }
        const res = await verifyPhone(this.phone)
        if (res.exist === -1) {
          Toast({
            message: '该手机号未注册'
          })
          return
        }
        // 把用户电话号码保存至Vuex中
        this.$store.commit(USERPHONE, this.phone)
        this.$router.push('/verification')
      }
    }
  }
}
</script>

<style scoped lang="less">
.phone-login {
  height: 100vh;

  .phone-login-title {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 20px;

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    .desc {
      margin-top: 10px;
      color: #9a9a9a;
      font-size: 16px;
    }

    .phone {
      margin-top: 30px;

      .van-cell-group {
        border-bottom: 1px solid #eee;
      }
    }

    .van-button {
      margin-top: 30px;
    }
  }
}
</style>

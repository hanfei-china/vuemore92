<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            登陆
          </h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(err,idx) in errArr" :key="idx">
              {{ err }}
            </li>
          </ul>

          <!-- 在vue中，阻止表单的提交动作 -->
          <form @submit.prevent>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click="hLogin">
              登陆
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user'
const Cookie = require('js-cookie')
export default {
  data () {
    return {
      user: {
        email: 'hello12345qweasd@qq.com',
        password: 'hello12345qweasd'
      },
      errArr: []
    }
  },
  methods: {
    async hLogin () {
      // 清空错误信息
      this.errArr = []

      try {
        // 登陆成功之后，会返回用户信息
        const { data } = await login({
          user: this.user
        })

        console.log(this.$store)

        // 把用户数据保存在vuex中
        this.$store.commit('setUser', data.user)

        // 登陆成功，本地设置cookie
        Cookie.set('user', data.user)

        this.$router.push('/')
      } catch (err) {
        // 这个操作出错，不一定是后端接口返回的错误信息，还可能是本地网络问题
        // 注册出错了
        const { response } = err
        if (response && response.data) {
          // 收到后端接口返回的注册错误信息
          const errObj = response.data.errors
          for (const key in errObj) {
            console.log(errObj[key][0])
            this.errArr.push(`${key}: ${errObj[key][0]}`)
          }
        }
        console.dir(err)
      }
    }
  }
}
</script>

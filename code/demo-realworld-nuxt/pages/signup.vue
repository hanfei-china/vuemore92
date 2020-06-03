<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            注册
          </h1>
          <p class="text-xs-center">
            <nuxt-link to="/login">
              已有帐号
            </nuxt-link>
          </p>

          <ul class="error-messages">
            <li v-for="(err,idx) in errArr" :key="idx">
              {{ err }}
            </li>
          </ul>

          <!--
            阻止表单自带的跳转
            在表单内部的button默认会有提交表单的功能，这就会引起表单的跳转
            解决方法：
            1. 给按钮补充 type="button"
          -->
          <form>
            <fieldset class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button type="button" class="btn btn-lg btn-primary pull-xs-right" @click="hAdd">
              注册
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { register } from '@/api/user'
export default {
  name: 'Signup',
  data () {
    return {
      user: {
        username: 'hello',
        email: 'hello@qq.com',
        password: '123456'
      },
      errArr: [] // 保存本次注册错误信息
    }
  },
  methods: {
    async hAdd () {
      // 清空错误提示
      this.errArr = []

      try {
      // 注意这里，按接口的要求传入参数
        const { data } = await register({
          user: this.user
        })
        // 如果注册成功，用户数据会保存在 data.user 并返给我们。
        console.log(data.user)

        // 回到登陆页
        this.$router.push('/login')
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

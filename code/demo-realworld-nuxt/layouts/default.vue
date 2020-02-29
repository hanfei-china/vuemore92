<template>
  <div>
    <!-- 顶部 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">
              主页
            </nuxt-link>
          </li>

          <!-- 如果有登陆就显示如下 -->
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose" />&nbsp;发表文章
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a" />&nbsp;设置
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">
                <img class="user-pic" :src="user.image">
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>

          <template v-else>
            <!-- 如果当前没有登陆就显示如下 -->
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">
                &nbsp;登陆
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/signup">
                &nbsp;注册
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- 具体某个页面的内容会显示在<nuxt/> -->
    <nuxt />

    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="tagListStr" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list" />
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="hAdd">
                发布文章
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle } from '@/api/article'
export default {
  data () {
    return {
      tagListStr: 'js,vue,nuxt',
      article: {
        title: 'nuxt.js好',
        description: '它有什么好？',
        body: '谁用谁知道',
        tagList: []
      }
    }
  },
  methods: {
    async hAdd () {
      try {
        // 收集信息
      // 标签列表要单独处理一下
        this.article.tagList = this.tagListStr.split(',')

        // 添加文章 成功，会返回这个文章
        const { data } = await addArticle({
          article: this.article
        })
        // 文章编号就是 data.article.slug
        console.log(data.article.slug)
        // 跳转到详情页
        this.$router.push(`/article/${data.article.slug}`)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

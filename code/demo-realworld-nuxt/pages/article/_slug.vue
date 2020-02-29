<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round" />
            &nbsp;
            Follow Eric Simons <span class="counter">(10)</span>
          </button>
        &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart" />
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          {{ article.body }}
        </div>
      </div>

      <hr>

      <div class="article-meta">
        <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"></a>
        <div class="info">
          <a href="" class="author">{{ article.author.username }}</a>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round" />
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart" />
          &nbsp;
          Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
        </button>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3" />
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
              <button class="btn btn-sm btn-primary">
                Post Comment
              </button>
            </div>
          </form>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
              </a>
            &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
              </a>
            &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit" />
                <i class="ion-trash-a" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 用户要通过：
// http://localhost:3000/article/nuxt-js-5exs6x
// 来访问 编号为nuxt-js-5exs6x的文章详情

// 思路：用户进入页面时，去取出 文章编号，然后去请求接口，获取数据，渲染页面
import { getArticle } from '@/api/article'
export default {
  name: 'ArticleDetail',
  async asyncData ({ params }) {
    // 如何获取当前页面的参数的.... asyncData ({ params })
    // console.log('11111111111111111')
    // console.log(params)
    const { slug } = params
    const { data } = await getArticle(slug)

    // console.log(data)
    return {
      article: data.article
    }
  },
  data () {
    return {

    }
  }
}
</script>

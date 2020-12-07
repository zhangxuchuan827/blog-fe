<template>
  <Layout>
    <div class="top">
      <a @click="back"><</a>
      <span>|</span>
      <h2>{{ $page.strapiPost.title }}</h2>
    </div>
    <div class="desc">
      <span>时间：{{ formatDate($page.strapiPost.created_at) }}</span>
    </div>
    <div class="cont">
      <div v-html="getFormatContent($page.strapiPost.content)" />
    </div>
  </Layout>
</template>

<page-query>
query ($id : ID!) {
  strapiPost(id: $id) {
    id,
    title,
    desc,
    content,
    tags {
      name
    },
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const Markdown = new MarkdownIt()
export default {
  metaInfo: {
    title: '文章详情'
  },
  methods: {
    getFormatContent (string = "") {
      return Markdown.render(string)
    },
    formatDate (timeString) {
      const date = new Date(timeString)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${ date.getDate() } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    back () {
      history.back()
    }
  }
}
</script>

<style lang="scss" scope>
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;;
  a {
    cursor: pointer;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    color: white;
    background-color: rgb(66, 113, 243);
    text-align: center;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  span {
    padding: 0 10px;
    color: #ccc;
  }
}
.desc {
  color: #ccc;
}
</style>
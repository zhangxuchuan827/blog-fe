<template>
  <Layout>
    <h1>最近动态</h1>
    <div class="list">
      <g-link v-for="(item,index) in $page.posts.edges" :key="index" class="item" :to="`/detail/${item.node.id}`">
        <h4>{{ item.node.title }}</h4>
        <h5>{{ item.node.desc }}</h5>
        <span>发布时间：{{ formatDate(item.node.created_at) }}</span>
        <span>&emsp;标签：</span>
        <span v-for="(tag, ti) in item.node.tags" :key="ti" class="tag">
          {{ tag.name }}
        </span>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allStrapiPost {
    totalCount,
    edges {
      node {
        id,
        title,
        desc,
        tags {
          name
        },
        created_at
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: '最新动态'
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    formatDate (timeString) {
      const date = new Date(timeString)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  .item {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    text-decoration: none;
    h4, h5 {
      padding: 0;
      margin: 0;
      padding: 5px 0;
      font-weight: normal;
      color: #333;
    }
    h4 {
      color: black;
    }
    span {
      color: #999;
      font-size: 14px;
    }
    .tag {
      border: 1px solid #eee;
      background: #eee;
      padding: 0 5px;
      display: inline-block;
    }
    &:hover {
      cursor: pointer;
      background-color: #f9f9f9;
    }
  }
}
</style>

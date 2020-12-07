<template>
  <Layout>
    <h1>SNS</h1>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="粉丝" name="first" class="list">
        <div v-for="(item,index) in followers" :key="index" class="item">
          <a :href="item.html_url" target="blank">
            <i class="el-icon-user" />
            <span>{{ item.login }}</span>
          </a>
          <img :src="item.avatar_url" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注" name="second" class="list">
        <div v-for="(item,index) in following" :key="index" class="item">
          <a :href="item.html_url" target="blank">
            <i class="el-icon-user" />
            <span>{{ item.login }}</span>
          </a>
          <img :src="item.avatar_url" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </Layout>
</template>

<script>
import Axios from 'axios'
export default {
  metaInfo: {
    title: 'SNS'
  },
  data() {
    return {
      activeName: 'first',
      following: [],
      followers: [],
    }
  },
  methods: {
    loadFollowers() {
      Axios.get('https://api.github.com/users/zhangxuchuan827/following?page=1&per_page=9').then(resp => {
        this.following = resp.data
      })
    },
    loadFollowing() {
      Axios.get('https://api.github.com/users/zhangxuchuan827/followers?page=1&per_page=9').then(resp => {
        this.followers = resp.data
      })
    }
  },
  async created () {
    this.loadFollowers()
    this.loadFollowing()
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  .item {
    margin: 5px;
    border: 1px solid #eee;
    padding: 5px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 130px;
    cursor: pointer;
    &:hover {
      background-color: #fcfcfc;
    }
    a {
      text-decoration: none;
      color: rgb(75, 75, 255);
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>
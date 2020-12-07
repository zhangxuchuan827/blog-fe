<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <div class="main">
      <nav class="nav">
        <g-link class="nav__link" to="/">BLOG</g-link>
        <g-link class="nav__link" to="/social/">SNS</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>

.layout {
  // max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    background-color: rgb(12, 98, 226);
    color: white;
    padding-left: 20px;;
    a {
      color: white;
      font-size: 30px;
      text-decoration: none;
    }
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 80px);
    .nav {
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid #dcc;
      .nav__link {
        color: #333;
        text-decoration: none;
        border-bottom: 1px solid #eee;
        height: 44px;
        line-height: 44px;
        width: 100%;
        text-align: center;
        &:hover {
          color: blue;
        }
      }
    }
    .content {
      flex: 1;
      min-height: 100px;
      padding: 20px;
      box-sizing: border-box;
    }
  }

}

</style>

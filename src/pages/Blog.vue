<template>
  <Layout>
    <h1>Blog</h1>
  </Layout>
</template>

<static-query>
{
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

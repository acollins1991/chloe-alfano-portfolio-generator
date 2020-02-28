<template>
  <div class="container">
    test
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    this.$router.options.routes.forEach((route) => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>

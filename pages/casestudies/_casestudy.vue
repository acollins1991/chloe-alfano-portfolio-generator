<template>
  <div>
    testing
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CaseStudy',
  data () {
    return {
      slug: this.$route.params.casestudy
    }
  },
  computed: {
    ...mapState(['clientData'])
  }
}
</script>

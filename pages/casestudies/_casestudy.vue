<template>
  <div>testing</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CaseStudy',
  data () {
    return {
      caseStudy: {}
    }
  },
  computed: {
    ...mapState(['clientData'])
  },
  mounted () {
    const filteredCaseStudies = this.clientData.caseStudies.filter((caseStudy) => {
      return caseStudy.slug === this.$route.params.casestudy
    })
    this.caseStudy = filteredCaseStudies[0]
  }
}
</script>

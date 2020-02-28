<template>
  <ul>
    <li v-for="(caseStudy, index) in caseStudies" :key="index">
      <a :href="$route.fullPath + '/' + caseStudy.slug">{{ caseStudy.slug }}</a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CaseStudiesHome',
  data () {
    return {
      caseStudies: []
    }
  },
  computed: {
    ...mapState(['clientData'])
  },
  mounted () {
    this.caseStudies = this.clientData.caseStudies
  }
}
</script>

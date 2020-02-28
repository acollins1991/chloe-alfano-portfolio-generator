<template>
  <div>
    <template v-for="(section, index) in caseStudy.sections">
      <component :is="section.name" :key="index" :sectionData="section" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CaseStudyBanner from '@/components/CaseStudySections/CaseStudyBanner'

export default {
  name: 'CaseStudy',
  components: {
    CaseStudyBanner
  },
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

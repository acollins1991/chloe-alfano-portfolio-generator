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
import CaseStudyGrid from '@/components/CaseStudySections/CaseStudyGrid'

export default {
  name: 'CaseStudy',
  components: {
    CaseStudyBanner,
    CaseStudyGrid
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

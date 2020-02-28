<template>
  <section>
    <div>
      <div class="container mx-auto px-4 flex flex-wrap">
        <template v-for="(column, index) in sectionData.columns">
          <div :key="index" class="col" :class="column.widthClass">
            testing
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudyGrid',
  props: ['sectionData']
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
.col {
  padding-left: 12px;
  padding-right: 12px;
  &:first-child {
    padding-left: 0;
  }
  &:nth-child(2) {
    padding-right: 0;
  }
}
</style>

<template>
  <section class="relative">
    <div class="container mx-auto px-4 flex flex-wrap">
      <template v-for="(column, index) in sectionData.columns">
        <div
          :key="index"
          class="col"
          :class="column.classes"
          v-html="column.content"
        />
      </template>
    </div>
    <div
      v-if="sectionData.backgroundElement"
      class="absolute background-element"
      :class="sectionData.backgroundElement.classes"
      :style="{ backgroundColor: sectionData.backgroundElement.color }"
    />
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
.background-element {
    z-index: -1;
    &.full-height {
      height: 100%;
    }
    &.half-height {
      height: 50%;
    }
    &.full-width {
      width: 100%;
    }
    &.half-width {
      width: 100%;
    }
  }
</style>

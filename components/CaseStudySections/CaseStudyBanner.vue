<template>
  <section>
    <div
      class="bg-cover bg-center banner-wrapper"
      :style="{ backgroundImage: 'url(' + sectionData.backgroundImage + ')' }"
    >
      <div
        class="container mx-auto px-4 relative z-10 flex flex-wrap justify-center content-center"
      >
        <span
          class="flex-none text-center text-white"
          v-html="sectionData.textContent"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudyBanner',
  props: ['sectionData']
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.container {
  min-height: 100vh;
  @media (min-width: 992px) {
    min-height: 500px;
  }
}
</style>

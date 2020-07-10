<template>
  <div :style="background">
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imgfrag",
  props: {
    url: String
  },
  data() {
    return {
      background: {
        position: "relative",
        width: "100%",
        height: "auto",
        minHeight: "35rem;",
        padding: "15rem 0",
        background: `url("${this.url}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: " scroll",
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style >
.slot {
  margin-top: -200px;
}
</style>
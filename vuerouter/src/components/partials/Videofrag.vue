<template>
  <div>
    <video class="video" loop="true" autoplay="autoplay">
      <source src="../../assets/video.mp4" type="video/mp4" />asasdsad
    </video>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Videofrag",
  props: {
    url: String
  }
};
</script>

<style >
.video {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  z-index: -100;
  background-size: cover;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 75%,
    #000000 100%
  );
}
.content {
  z-index: 1;
}
</style>
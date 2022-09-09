<template>
  <section class="social">
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/social/fb.png" alt="Facebook" />
    </a>
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/social/yt.png" alt="YouTube" />
    </a>
    <a href="#" class="social__item">
      <img
        class="social__image"
        src="../assets/social/ig.png"
        alt="Instagram"
      />
    </a>
  </section>
</template>

<script>
export default {
  name: "SocialBlock",
};
</script>

<style lang="less" scoped>
.social {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <section class="social">
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/social/fb.png" alt="Facebook" />
    </a>
    <a
      href="https://m.youtube.com/channel/UCbJ_Ngk63HxyaqMiRbLah7g"
      class="social__item"
    >
      <img class="social__image" src="../assets/social/yt.png" alt="YouTube" />
    </a>
    <a href="http://instagram.com/_u/hotpeppersalmaty/" class="social__item">
      <img
        class="social__image"
        src="../assets/social/ig.png"
        alt="Instagram"
      />
    </a>
    <a
      href="https://www.tiktok.com/@hotpepperalmaty?_t=8mVMVV3CJCY&_r=1"
      class="social__item"
    >
      <img class="social__image" src="../assets/social/tt.png" alt="TikTok" />
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
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__image {
    width: 60px;
    height: 60px;
    border: solid 2px #eb5757;
    border-radius: 15px;
  }
}
</style>

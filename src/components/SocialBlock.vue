<template>
  <section class="social">
    <a
      href="http://instagram.com/_u/hotpeppersalmaty/"
      target="_blank"
      class="social__item"
    >
      <img
        class="social__image"
        src="../assets/social/ig.png"
        alt="Instagram"
      />
    </a>
    <a
      href="https://www.tiktok.com/@hotpepperalmaty?_t=8mVMVV3CJCY&_r=1"
      target="_blank"
      class="social__item"
    >
      <img class="social__image" src="../assets/social/tt.png" alt="TikTok" />
    </a>
    <a
      href="https://m.youtube.com/channel/UCbJ_Ngk63HxyaqMiRbLah7g"
      target="_blank"
      class="social__item"
    >
      <img class="social__image" src="../assets/social/yt.png" alt="YouTube" />
    </a>
    <a
      href="https://www.facebook.com/share/yoiVYXA2HfMgcxvt/?mibextid=qi2Omg"
      target="_blank"
      class="social__item"
    >
      <img class="social__image" src="../assets/social/fb.png" alt="Facebook" />
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
    filter: drop-shadow(0px 0px 10px white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  }
}
</style>

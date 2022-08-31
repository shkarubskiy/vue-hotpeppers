<template>
  <HeaderTemplate></HeaderTemplate>
  <main class="main">
    <section class="main__logo">
      <img src="./assets/logo.png" alt="./logo" />
    </section>
    <router-view />
  </main>
  <FooterTemplate></FooterTemplate>
</template>

<script>
import HeaderTemplate from "@/components/HeaderTemplate.vue";
import FooterTemplate from "@/components/FooterTemplate.vue";

export default {
  name: "App",
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
};
</script>
<style lang="less">
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fff7df 0%, #fcead3 100%);
  &__logo {
    height: 100px;
    width: 100px;
    & > img {
      height: 100%;
    }
  }
}
</style>

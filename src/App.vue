<template>
  <HeaderTemplate></HeaderTemplate>
  <div class="wrapper">
    <main class="main">
      <section class="main__logo logo">
        <img class="logo__image" src="./assets/logo.svg" alt="Logo" />
      </section>
      <router-view />
    </main>
  </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fff7df 0%, #fcead3 100%);
}

.main {
  max-width: 390px;
  padding: 20px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    height: 100px;
    width: 100px;
  }
}
</style>

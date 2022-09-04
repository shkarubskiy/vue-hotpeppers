<template>
  <HeaderTemplate></HeaderTemplate>
  <div class="wrapper">
    <main class="main">
      <div class="main__logo">
        <img src="./assets/logo.svg" alt="Logo" />
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Caveat:wght@700&family=Inter:wght@700&family=Kurale&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}

.body {
  overflow: hidden;
}

.title {
  font-family: "Alegreya";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  color: #333333;
}

.subtitle {
  font-family: "Caveat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  color: #000000;
}

.text {
  font-family: "Kurale";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  color: #000000;
}

.button {
  padding: 9px 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  color: #ffffff;
  background: #eb5757;
  border-radius: 24px;
  cursor: pointer;
}

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

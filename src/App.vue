<template>
  <HeaderTemplate />
  <div class="wrapper">
    <main class="main">
      <router-link to="/" class="main__logo">
        <img src="./assets/logo.svg" alt="Logo" />
      </router-link>
      <router-view />
      <div class="main__about">
        <p class="about__text text">
          Мы выращиваем самые лучшие, жгучие перцы со всего мира и производим из
          них сверхострую целебную продукцию! ОРГаническое и ЭКОлогичное
          выращивание всех компонентов на собственной ферме в горах Заилийского
          Алатау. Наши целебные продукты из сверх острых перцев очень полезны
          для иммунитета, кровеносной и дыхательной систем человека! Поднимают
          тонус, омолаживают, вызывают эйфорию. Душа Перца - Окунись в тонкий
          мир палящего вкуса.
        </p>
      </div>
    </main>
  </div>
  <NavbarTempalte />
  <FooterTemplate />
</template>

<script>
import HeaderTemplate from "@/components/HeaderTemplate.vue";
import FooterTemplate from "@/components/FooterTemplate.vue";
import NavbarTempalte from "@/components/NavbarTempalte.vue";

export default {
  name: "App",
  components: {
    HeaderTemplate,
    FooterTemplate,
    NavbarTempalte,
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

body {
  min-width: 320px;
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
  &-pepper {
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

  &-sauce {
    font-family: "Kurale";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: "calt" off;
    color: #000000;
    text-decoration: none;
  }
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

.pretext {
  font-family: "Kurale";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  color: #000000;

  white-space: pre-wrap;
  /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;
  /* Mozilla, since 1999 */
  white-space: -pre-wrap;
  /* Opera 4-6 */
  white-space: -o-pre-wrap;
  /* Opera 7 */
  word-wrap: break-word;
  /* Internet Explorer 5.5+ */
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

.button:hover {
  background: #ea4040;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fff7df 0%, #fcead3 100%);
}

.main {
  width: 100%;
  max-width: 390px;
  padding: 20px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    height: 100px;
    width: 100px;
    margin-bottom: 30px;
  }

  &__logo img {
    object-fit: cover;
  }

  &__text {
    margin-top: 30px;
    text-align: center;
  }
}
</style>

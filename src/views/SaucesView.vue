<template>
  <section class="intro">
    <div class="intro__cover cover">
      <img class="cover__image" src="../assets/sauces/intro.jpg" alt="intro" />
    </div>
    <h2 class="intro__title title">
      Экстра острые соусы в Алматы &#127798;&#65039;&#128293;&#10084;&#65039;
    </h2>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces">
    <div class="sauces__container">
      <SauceCard v-for="sauce in sauces" :sauce="sauce" :key="sauce.id">
      </SauceCard>
    </div>
  </section>
  <SocialBlock />
</template>

<script>
import SauceCard from "@/components/SauceCard.vue";
import SocialBlock from "@/components/SocialBlock.vue";
import sauces from "../assets/json/sauces.json";
export default {
  name: "SaucesView",
  components: { SauceCard, SocialBlock },
  computed: {
    sauces() {
      return sauces;
    },
  },
};
</script>

<style lang="less" scoped>
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-top: 30px;
  }

  &__cover {
    width: 100%;
    height: 350px;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 20px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // object-position: 0px -70px;
    }
  }

  &__text {
    margin-top: 30px;
  }
}
.sauces {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>

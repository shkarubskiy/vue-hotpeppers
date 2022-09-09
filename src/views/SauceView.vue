<template>
  <section class="sauce">
    <div class="sauce__cover">
      <img :src="require(`@/assets/sauces/${sauce.cover}`)" :alt="sauce.name" />
    </div>
    <h2 class="sauce__title title">{{ sauce.name }}</h2>
    <p class="sauce__price">Цена за 100г - {{ sauce.price }} тг</p>
    <p class="sauce__text text">{{ sauce.desc }}</p>
  </section>
</template>

<script>
import sauces from "@/json/sauces.json";
export default {
  name: "SauceView",
  computed: {
    sauces() {
      return sauces;
    },
    sauce() {
      return sauces[this.$route.params.id - 1];
    },
  },
};
</script>

<style lang="less" scoped>
.sauce {
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
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__price {
    font-family: "Caveat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
    font-feature-settings: "calt" off;
    color: #333333;
  }

  &__text {
    margin-top: 30px;
  }
}
</style>

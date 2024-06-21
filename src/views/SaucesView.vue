<template>
  <section class="intro">
    <div class="intro__cover cover">
      <img class="cover__image" src="../assets/sauces/intro.jpg" alt="intro" />
    </div>
    <h2 class="intro__title title">
      Самые Острые Перцы и Соусы в Казахстане 🌶️🔥❤️
    </h2>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces" v-if="sauces">
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
export default {
  name: "SaucesView",
  components: { SauceCard, SocialBlock },
  data() {
    return {
      sauces: null,
    };
  },
  created() {
    const urlItems = "https://hot.angels.kz/?q=items/list";

    fetch(urlItems, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        this.sauces = JSON.parse(text).items;
        // console.log(this.sauces);
      })
      .catch((err) => console.error(`JSON ERROR: ${err}`));
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
    padding: 0 20px;
    text-align: center;
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

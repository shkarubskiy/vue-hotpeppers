<template>
  <section class="intro">
    <h2 class="intro__title title">
      Экстра острые соусы в Алматы &#127798;&#65039;&#128293;&#10084;&#65039;
    </h2>
    <div class="intro__cover cover">
      <img class="cover__image" src="../assets/home/intro.jpg" alt="" />
    </div>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces">
    <div class="sauces__container">
      <SauceCard v-for="sauce in sauces" :sauce="sauce" :key="sauce.id">
      </SauceCard>
    </div>
    <router-link to="/sauces">
      <button class="sauces__button button">Все соусы в каталоге</button>
    </router-link>
  </section>
  <section class="peppers">
    <div class="peppers__cover cover">
      <img
        class="cover__image"
        :src="require(`@/assets/peppers/${peppers[0].cover}`)"
        alt="Trinidad Scorpion Moruga Red"
      />
    </div>
    <h3 class="peppers__subtitle subtitle-pepper">{{ peppers[0].name }}</h3>
    <p class="peppers__text text">{{ peppers[0].desc }}</p>
    <router-link to="/peppers">
      <button class="peppers__button button">Все острые перцы</button>
    </router-link>
  </section>
  <section class="social">
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/fb.png" alt="" />
    </a>
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/yt.png" alt="" />
    </a>
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/ig.png" alt="" />
    </a>
  </section>
  <section class="path">
    <img class="path__image" src="../assets/home/path.svg" alt="Path" />
  </section>
</template>

<script>
import SauceCard from "@/components/SauceCard.vue";
import peppers from "@/json/peppers.json";
import sauces from "@/json/sauces.json";
export default {
  name: "HomeView",
  computed: {
    peppers() {
      return peppers;
    },
    sauces() {
      return sauces;
    },
  },
  components: { SauceCard },
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
    width: 350px;
    height: 350px;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 20px;
  }

  .cover__image {
    height: 100%;
    width: auto;
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

.peppers {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 26px;

  &__cover {
    height: 216px;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 20px;
  }

  &__subtitle {
    margin-top: 10px;
  }

  &__text {
    margin-top: 10px;
  }

  &__button {
    margin-top: 20px;
  }
}

.cover__image {
  height: 100%;
  width: auto;
}

.social {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.path {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    height: 100%;
    width: auto;
  }
}
</style>

<template>
  <section class="intro">
    <div class="intro__cover">
      <img src="../assets/home/intro.jpg" alt="Intro" />
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
      <SauceCard v-for="sauce in sauces" :sauce="sauce" :key="sauce.id" />
    </div>
    <router-link to="/sauces">
      <button class="sauces__button button" @click="this.scrollToTop">
        Все соусы в каталоге
      </button>
    </router-link>
  </section>
  <section class="peppers">
    <div class="peppers__cover">
      <img
        :src="require(`@/assets/peppers/${peppers[0].cover}`)"
        alt="Trinidad Scorpion Moruga Red"
      />
    </div>
    <h3 class="peppers__subtitle subtitle-pepper">{{ peppers[0].name }}</h3>
    <p class="peppers__text text">{{ peppers[0].desc }}</p>
    <router-link to="/peppers" @click="this.scrollToTop">
      <button class="peppers__button button" @click="this.scrollToTop">
        Все острые перцы
      </button>
    </router-link>
  </section>
  <SocialBlock />
  <section class="path">
    <img class="path__image" src="../assets/home/path.svg" alt="Path" />
    <p class="path__block">
      <span class="path__text text">
        Посмотрите какие соусы и перцы у нас есть
      </span>
      <span class="path__emoji">&#128064;</span>
    </p>
  </section>
</template>

<script>
import SauceCard from "@/components/SauceCard.vue";
import SocialBlock from "@/components/SocialBlock.vue";
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
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    SauceCard,
    SocialBlock,
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
    width: 350px;
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
  padding: 10px 10px 20px;
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
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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

.path {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url();
  &__image {
    height: 100%;
    width: auto;
  }
  &__block {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>

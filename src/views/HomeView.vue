<template>
  <section class="intro">
    <div class="intro__cover">
      <img src="../assets/home/intro.jpg" alt="Intro cover" />
    </div>
    <h2 class="intro__title title">
      Целебные продукты из самых острых перцев мира 🌶️🔥❤️
    </h2>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces" v-if="sauces">
    <div class="sauces__container">
      <SauceCard v-for="sauce in sauces" :sauce="sauce" :key="sauce.id" />
    </div>
    <router-link to="/sauces">
      <button class="sauces__button button" @click="this.scrollToTop">
        Вся продукция в каталоге
      </button>
    </router-link>
  </section>
  <section v-if="peppers" class="peppers">
    <div class="peppers__cover">
      <img
        :src="'https://dev.angels.kz/' + peppers[1].img[0]"
        :alt="peppers[1].name"
        v-if="peppers[1].img[0]"
      />
    </div>
    <h3 class="peppers__subtitle subtitle-pepper">{{ peppers[1].name }}</h3>
    <p class="peppers__text text">{{ peppers[1].desc }}</p>
    <router-link to="/peppers" @click="this.scrollToTop">
      <button class="peppers__button button" @click="this.scrollToTop">
        Все острые перцы
      </button>
    </router-link>
  </section>
  <SocialBlock />
  <PathBlock />
</template>

<script>
import SauceCard from "@/components/SauceCard.vue";
import SocialBlock from "@/components/SocialBlock.vue";
import PathBlock from "@/components/PathBlock.vue";
export default {
  name: "HomeView",
  data() {
    return {
      peppers: null,
      sauces: null,
    };
  },
  created() {
    // const urlItems = "https://dev.angels.kz/?q=items/list";
    // const urlPeppers = "https://dev.angels.kz/?q=peppers/list";

    this.getPeppers();
    this.getSauces();

    // fetch(urlItems, {
    //   method: "GET",
    // })
    //   .then((response) => response.text())
    //   .then((text) => {
    //     this.sauces = JSON.parse(text).items;
    //     // console.log(this.sauces);
    //   })
    //   .catch((err) => console.error(`JSON ERROR: ${err}`));

    // fetch(urlPeppers, {
    //   method: "GET",
    // })
    //   .then((response) => response.text())
    //   .then((text) => {
    //     this.peppers = JSON.parse(text).peppers;
    //     // console.log(this.peppers);
    //   })
    //   .catch((err) => console.error(`JSON ERROR: ${err}`));
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    // getPepperCover(pepper) {
    //   return `/img/peppers/${pepper}`;
    // },
    async getPeppers() {
      const URL = "https://dev.angels.kz/?q=peppers/list";
      const RES = await fetch(URL, {
        method: "GET",
      });
      let response = await RES.json();
      this.peppers = response.peppers;
    },
    async getSauces() {
      const URL = "https://dev.angels.kz/?q=items/list";
      const RES = await fetch(URL, {
        method: "GET",
      });
      let response = await RES.json();
      this.sauces = response.items;
    },
  },
  components: {
    SauceCard,
    SocialBlock,
    PathBlock,
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
  margin: 30px 0;
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
</style>

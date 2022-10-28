<template>
  <section class="sauce" v-if="sauces">
    <div class="sauce__cover">
      <img
        class="preview"
        :src="getSauceCover(sauce.img[1])"
        :alt="sauce.name"
      />
    </div>
    <div class="sauce__images">
      <div
        class="sauce__image"
        v-for="(img, index) in sauce.img"
        :key="index"
        @click="showImg(getSauceCover(img))"
      >
        <img :src="getSauceCover(img)" alt="" />
      </div>
    </div>
    <h2 class="sauce__title title">{{ sauce.name }}</h2>
    <p class="sauce__price">Цена за 100г - {{ sauce.price }} тг</p>
    <p class="sauce__text text">{{ sauce.desc }}</p>
  </section>
  <SocialBlock />
</template>

<script>
export default {
  name: "SauceView",
  data() {
    return {
      sauces: null,
    };
  },
  created() {
    const urlItems = "https://dev.angels.kz/?q=items/list";

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
  computed: {
    sauce() {
      return this.sauces[this.$route.params.id - 1];
    },
  },
  methods: {
    showImg(image) {
      const preview = document.querySelector(".preview");
      preview.src = image;
    },
    getSauceCover(sauce) {
      return `/img/sauces/${sauce}`;
    },
  },
};
</script>

<style lang="less" scoped>
.sauce {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__images {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__image {
    width: 17%;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-top: 30px;
    align-self: flex-start;
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
    margin-top: 30px;
    align-self: flex-start;
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

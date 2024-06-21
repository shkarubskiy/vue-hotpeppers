<template>
  <section class="sauce" v-if="sauce">
    <SocialBlock />
    <div class="sauce__cover" v-if="sauce.img">
      <img
        class="preview"
        :src="'https://dev.angels.kz/' + sauce.img[0]"
        :alt="sauce.name"
      />
    </div>
    <div class="sauce__images" v-if="sauce.img">
      <div
        class="sauce__image"
        v-for="(img, index) in sauce.img"
        :key="index"
        @click="showImg('https://dev.angels.kz/' + img)"
      >
        <img :src="'https://dev.angels.kz/' + img" alt="" />
      </div>
    </div>
    <h2 class="sauce__title title">{{ sauce.name }}</h2>
    <p class="sauce__price">Цена - {{ sauce.price }} тг</p>
    <pre class="sauce__pretext pretext">{{ sauce.desc }}</pre>
  </section>
  <SocialBlock />
</template>

<script>
export default {
  name: "SauceView",
  data() {
    return {
      sauces: null,
      sauce: null,
    };
  },
  created() {
    this.getSauce();
  },
  computed: {
    // sauce() {
    //   return this.sauces[this.$route.params.id];
    // },
  },
  methods: {
    showImg(image) {
      const preview = document.querySelector(".preview");
      preview.src = image;
    },
    async getSauce() {
      const URL =
        "https://dev.angels.kz/?q=items/get-by-id/" + this.$route.params.id;
      const RES = await fetch(URL, {
        method: "GET",
      });
      let response = await RES.json();
      console.log(response);
      this.sauce = response.item;
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

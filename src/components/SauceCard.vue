<template>
  <router-link
    class="sauce__card"
    :to="getLink(sauce.id)"
    @click="this.scrollToTop"
  >
    <div class="sauce__cover">
      <img
        :src="require(`@/assets/sauces/${sauce.img[1]}`)"
        :alt="sauce.name"
      />
    </div>
    <h2 class="sauce__subtitle subtitle-sauce">
      {{ sauce.name }} Sauce — Extra Hot
    </h2>
  </router-link>
</template>

<script>
export default {
  name: "SauceCard",
  props: {
    sauce: null,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getLink(id) {
      return `/sauces/${id}`;
    },
  },
};
</script>

<style lang="less" scoped>
.sauce {
  &__card {
    width: 48%;
    height: 200px;
    padding: 10px;
    margin-bottom: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    border-radius: 26px;
    text-decoration: none;
  }

  &__cover {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 26px;
  }

  &__cover > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__subtitle {
    margin-top: 5px;
  }
}
</style>

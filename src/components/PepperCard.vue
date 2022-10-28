<template>
  <router-link
    v-if="pepper"
    class="pepper__card"
    :to="getLink(pepper.id)"
    @click="this.scrollToTop"
  >
    <div class="pepper__cover">
      <img :src="getPepperCover(pepper.cover)" :alt="pepper.name" />
    </div>
    <h3 class="pepper__subtitle subtitle-pepper">{{ pepper.name }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "PepperCard",
  props: {
    pepper: null,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getLink(id) {
      return `/peppers/${id}`;
    },
    getPepperCover(pepper) {
      return `/img/peppers/${pepper}`;
    },
  },
};
</script>

<style lang="less" scoped>
.pepper {
  &__card {
    width: 47%;
    height: 250px;
    padding: 10px 2.5px;
    margin-bottom: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    border-radius: 26px;
    text-decoration: none;
  }

  &__cover {
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__cover > img {
    height: auto;
    width: 100%;
  }
  &__subtitle {
    margin-top: 10px;
  }
}
</style>

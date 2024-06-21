<template>
  <section class="pepper" v-if="peppers">
    <SocialBlock />
    <div class="pepper__cover">
      <img :src="'https://dev.angels.kz/' + pepper.img[0]" :alt="pepper.name" />
    </div>
    <h2 class="pepper__title title">{{ pepper.name }}</h2>
    <p class="pepper__text text">{{ pepper.alias }}</p>
    <pre class="pepper__pretext pretext">{{ pepper.desc }}</pre>
  </section>
  <PeppersBlock />
  <SocialBlock />
</template>

<script>
import SocialBlock from "@/components/SocialBlock.vue";
import PeppersBlock from "@/components/PeppersBlock.vue";
export default {
  name: "PepperView",
  components: {
    SocialBlock,
    PeppersBlock,
  },
  data() {
    return {
      peppers: null,
    };
  },
  created() {
    this.getPeppers();
  },
  computed: {
    pepper() {
      return this.peppers.find((pepper) => pepper.id == this.$route.params.id);
    },
  },
  methods: {
    async getPeppers() {
      const URL = "https://dev.angels.kz/?q=peppers/list";
      const RES = await fetch(URL, {
        method: "GET",
      });
      let response = await RES.json();
      this.peppers = response.peppers;
    },
  },
};
</script>

<style lang="less" scoped>
.pepper {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-top: 30px;
  }

  &__cover {
    width: 100%;
    height: 190px;
    padding: 10px 0;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 20px;
    background-color: #ffffff;

    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
</style>

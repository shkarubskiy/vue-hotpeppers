<template>
  <section class="pepper">
    <div class="pepper__cover">
      <img
        :src="require(`@/assets/peppers/${pepper.cover}`)"
        :alt="pepper.name"
      />
    </div>
    <h2 class="pepper__title title">{{ pepper.name }}</h2>
    <p class="pepper__text text">{{ pepper.alias }} {{ pepper.desc }}</p>
  </section>
  <PeppersBlock />
  <SocialBlock />
</template>

<script>
import SocialBlock from "@/components/SocialBlock.vue";
import peppers from "@/json/peppers.json";
import PeppersBlock from "@/components/PeppersBlock.vue";
export default {
  name: "PepperView",
  components: {
    SocialBlock,
    PeppersBlock,
  },
  computed: {
    peppers() {
      return peppers;
    },
    pepper() {
      return peppers[this.$route.params.id - 1];
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
  }
}
</style>

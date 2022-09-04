<template>
  <div class="sauce__card">
    <div class="sauce__cover">
      <img :src="require(`@/assets/sauces/${sauce.cover}`)" :alt="sauce.name" />
    </div>
    <h2 class="sauce__subtitle subtitle-sauce">
      {{ sauce.name }} Extra Hot Sauce
    </h2>
  </div>
</template>

<script>
export default {
  name: "SauceCard",
  props: {
    sauce: null,
  },
};
</script>

<style lang="less" scoped>
.sauce {
  &__card {
    width: 165px;
    height: 200px;
    padding: 10px;
    margin-bottom: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    border-radius: 26px;
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
    height: auto;
    width: 100%;
  }

  &__subtitle {
    margin-top: 5px;
  }
}
</style>

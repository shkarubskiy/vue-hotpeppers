<template>
  <div class="pepper__card">
    <div class="pepper__cover">
      <img
        :src="require(`@/assets/peppers/${pepper.cover}`)"
        :alt="pepper.name"
      />
    </div>
    <h3 class="pepper__subtitle subtitle">{{ pepper.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "PepperCard",
  props: {
    pepper: null,
  },
};
</script>

<style lang="less" scoped>
.pepper {
  &__card {
    width: 165px;
    height: 250px;
    padding: 10px 2.5px;
    margin-bottom: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    border-radius: 26px;
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

<template>
  <section class="intro">
    <h2 class="intro__title title">
      Экстра острые соусы в Алматы &#127798;&#65039;&#128293;&#10084;&#65039;
    </h2>
    <div class="intro__cover cover">
      <img class="cover__image" src="../assets/sauces/intro.png" alt="intro" />
    </div>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces">
    <div class="sauces__container">
      <SauceCard v-for="sauce in sauces" :sauce="sauce" :key="sauce.id">
      </SauceCard>
    </div>
    <router-link to="/sauces">
      <button class="sauces__button button">Все соусы в каталоге</button>
    </router-link>
  </section>
</template>

<script>
export default {};
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
  }

  .cover__image {
    height: 100%;
    width: auto;
  }

  &__text {
    margin-top: 30px;
  }
}
</style>

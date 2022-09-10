<template>
  <section class="path">
    <img class="path__image" src="../assets/home/path.svg" alt="Path" />
    <div class="path__container">
      <p class="path__block">
        <span class="path__text text">
          Посмотрите какие соусы и перцы у нас есть
        </span>
        <span class="path__emoji">&#128064;</span>
      </p>
      <p class="path__block">
        <span class="path__emoji">💬</span>
        <span class="path__text text">Напишите на вотсап или позвоните</span>
      </p>
      <p class="path__block">
        <span class="path__text text">
          Ожидайте доставку или заберите из магазина
        </span>
        <span class="path__emoji">🚚</span>
      </p>
      <p class="path__block">
        <span class="path__emoji">🔥</span>
        <span class="path__text text">
          Окунитесь в тонкий мир палящего вкуса
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PathBlock",
};
</script>

<style lang="less" scoped>
.path {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
  }
  &__text {
    width: 47%;
  }
  &__emoji {
    flex-grow: 1;
    font-family: "Alegreya";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: "calt" off;
    color: #000000;
  }
  &__block {
    width: 100%;
    height: 25%;
    display: flex;
    text-align: center;
    align-items: center;
  }
}
</style>

<template>
  <section class="intro">
    <h2 class="intro__title title">
      Экстра острые соусы в Алматы &#127798;&#65039;&#128293;&#10084;&#65039;
    </h2>
    <p class="intro__text text">
      Душа Перца предлагает вам окунуться в тонкий мир палящего вкуса.
    </p>
  </section>
  <section class="sauces">
    <button class="sauces__button button">Все соусы в каталоге</button>
  </section>
  <section class="peppers">
    <h3 class="peppers__subtitle subtitle">Trinidad Scorpion Moruga Red</h3>
    <p class="peppers__text text">
      В 2012 году Trinidad Moruga Scorpion был признан самой острой из всех
      существующих разновидностей Capsicum chinense и лишь недавно отдал
      первенство своему еще более огненному родственнику - Carolina Reaper Red.
    </p>
    <button class="peppers__button button">Все острые перцы</button>
  </section>
  <section class="social">
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/fb.png" alt="" />
    </a>
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/yt.png" alt="" />
    </a>
    <a href="#" class="social__item">
      <img class="social__image" src="../assets/ig.png" alt="" />
    </a>
  </section>
  <section class="about">
    <img class="about__image" src="../assets/path.png" alt="" />
    <p class="about__text text">
      В нашем ассортименте более 7 самых лучших и жгучих сортов перца со всего
      мира!Приобретая свежевыращенные суперострые перцы вы можете их
      использовать как лучшее экстремальное дополнение к блюду, готовить свои
      разнообразные суперхот соусы, так же использовать семена!
    </p>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="less" scoped>
.intro > * {
  margin-top: 30px;
}
.sauces > * {
  margin-top: 30px;
}
.peppers {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 26px;
  &__subtitle {
    margin-top: 10px;
  }
  &__text {
    margin-top: 10px;
  }
  &__button {
    margin-top: 20px;
  }
}
.social {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    height: 100%;
    width: auto;
  }
  &__text {
    margin-top: 30px;
    text-align: center;
  }
}
// .test {
//   height: 160px;
//   width: 80px;
//   border-top-right-radius: 160px;
//   border-bottom-right-radius: 160px;
//   border: 4px solid gray;
//   border-left: 0;
//   filter: drop-shadow(0px 9px 4px rgba(0, 0, 0, 0.11));
// }
</style>

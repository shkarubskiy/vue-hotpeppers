<template>
  <section class="peppers">
    <SocialBlock />
    <div class="peppers__cover">
      <img src="../assets/peppers/cover.jpg" alt="Cover" />
    </div>
    <h2 class="peppers__title title">Калейдоскоп острых ощущений</h2>
    <p class="peppers__text text">
      Целебные свойства самых острых перцев мира:
    </p>
    <p class="peppers__text text">
      Острый перец разгоняет кровь, тонизирует, повышает иммунитет, ускоряет
      метаболизм, снижает уровень сахара в крови, улучшает зрение,
      восстанавливает потенцию, помогает при похудении, избавляет от насморка и
      ангины, разжижает, выводит мокроту и укрепляет ткани легких, лечит
      эмфизему, препятствует тромбозу, омолаживает организм, полезен для работы
      мозга.
    </p>
    <p class="peppers__text text">
      Острый перец - лекарство от рака и от язвы желудка, бронхорасширяющее,
      противоастматическое, средство от морщин, афродизиак, природный антибиотик
      и антисептик, иммуномодулятор, антиоксидант.
    </p>
    <PeppersBlock />
  </section>
  <SocialBlock />
</template>

<script>
import SocialBlock from "@/components/SocialBlock.vue";
import PeppersBlock from "@/components/PeppersBlock.vue";
export default {
  name: "PeppersView",
  components: {
    SocialBlock,
    PeppersBlock,
  },
};
</script>

<style lang="less" scoped>
.peppers {
  margin-top: 30px;

  &__title {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  &__cover {
    height: 234px;
    border-radius: 20px;
    overflow: hidden;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__card {
    margin-bottom: 30px;
  }

  &__container {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>

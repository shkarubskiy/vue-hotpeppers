<template>
  <section class="peppers">
    <div class="peppers__cover">
      <img src="../assets/peppers/cover.jpg" alt="Cover" />
    </div>
    <h2 class="peppers__title title">Калейдоскоп острых ощущений</h2>
    <p class="peppers__text text">
      Красный перец обладает сильным пряным ароматом и вкусом от пряного до
      острого и даже очень жгучего (обусловлен содержанием фенольного соединения
      капсаицина (ванилиламид дециленовой кислоты), которого нет в сладком
      болгарском перце). Капсаицин содержится в семенах, прожилках и кожице
      плода.
    </p>
    <p class="peppers__text text">
      Красный перец содержит большое количество витаминов С и А. Зелёный перец
      (неспелый красный перец) содержит значительно меньше этих витаминов. Кроме
      того,перец является хорошим источником витаминов группы B и в частности
      витамина B6. Красный перец богат также калием, магнием и железом.
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

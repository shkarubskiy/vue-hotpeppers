<template>
  <header class="header">
    <div class="header__pattern">
      <div class="header__container">
        <SocialBlock />
      </div>
    </div>
  </header>
</template>

<script>
import SocialBlock from "@/components/SocialBlock.vue";
export default {
  name: "HeaderTemplate",
  components: {
    SocialBlock,
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 200px;

  &__pattern {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url(../assets/pattern.png);
    background-size: contain;
    border-bottom: solid 2px #f2c94c;
  }

  &__container {
    min-width: 320px;
    max-width: 390px;
  }
}
</style>

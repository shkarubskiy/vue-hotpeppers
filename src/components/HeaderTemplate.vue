<template>
  <header class="header">
    <div class="header__pattern"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderTemplate",
};
</script>

<style lang="less" scoped>
.header {
  height: 200px;

  &__pattern {
    width: 100%;
    height: 200px;
    background-image: url(../assets/pattern.svg);
    background-size: contain;
    border-bottom: solid 2px #f2c94c;
  }
}
</style>

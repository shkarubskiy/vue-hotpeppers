<template>
  <footer class="footer">
    <div class="footer__pattern"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterTemplate",
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__pattern {
    width: 100%;
    height: 200px;
    background-image: url(../assets/pattern.png);
    background-size: contain;
    border-top: solid 2px #f2c94c;
  }
}
</style>
